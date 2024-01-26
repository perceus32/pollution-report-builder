import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SummaryData from './SummaryData';
import BarGraph from './BarGraph';

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState('New York');
  const [displayType, setDisplayType] = useState('summaryData');
  const [startDate, setStartDate] = useState(new Date(Date.now() - 86400000));
  const [endDate, setEndDate] = useState(new Date());
  const [pollutionData, setPollutionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailyCOData, setDailyCOData] = useState(null);

  const cities = ['New York', 'London', 'Tokyo'];
  const displayTypes = ['summaryData', 'barGraph'];

  const citiesData = {
    "New York": { latitude: 40.7128, longitude: -74.0060 },
    London: { latitude: 51.5074, longitude: -0.1278 },
    Tokyo: { latitude: 35.6895, longitude: 139.6917 },
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.value);
  };

  const handleDisplayTypeChange = (event) => {
    setDisplayType(event.value);
  };

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
  };

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };

  useEffect(() => {
    handleBuildReports();
  }, [selectedCity, displayType, startDate, endDate]);

  const handleBuildReports = async () => {
    setLoading(true);
    setError(null);

    try {
      const { latitude, longitude } = citiesData[selectedCity];
      const startDateUnix = Math.floor(startDate.getTime() / 1000);
      const endDateUnix = Math.floor(endDate.getTime() / 1000);
      const apiKey = 'bdc496c6276590ad7f55e3d31cd359b4'; 
      const url = `https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${startDateUnix}&end=${endDateUnix}&appid=${apiKey}`;

      const response = await axios.get(url);
      const data = response.data;

      const filteredData = data.list.filter((item) => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate >= startDate && itemDate <= endDate;
      });

      const so2Values = filteredData.map((item) => item.components.so2);
      const worstSO2 = Math.max(...so2Values);

      const dailyCOData = filteredData.map((item) => {
        const timestamp = new Date(item.dt * 1000).toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC', 
        });

        return {
          label: timestamp, 
          value: item.components.co,
        };
      });

      setPollutionData({ ...data, worstSO2Value: worstSO2, list: filteredData });
      setDailyCOData(dailyCOData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: dailyCOData ? dailyCOData.map((row) => row.label) : [], 
    datasets: [
      {
        label: 'CO Levels Chart', 
        data: dailyCOData ? dailyCOData.map((row) => row.value) : [], 
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="left-panel">
        <h2>Input Options</h2>
        <div className="dropdown-container">
          <Dropdown
            options={cities}
            onChange={handleCityChange}
            value={selectedCity}
            placeholder="Select a city"
          />
        </div>
        <div className="dropdown-container">
          <Dropdown
            options={displayTypes}
            onChange={handleDisplayTypeChange}
            value={displayType}
            placeholder="Select display type"
          />
        </div>
        <div className="datepicker-container">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            selectsEnd={false}
            startDate={new Date('2020-01-01')}
            endDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={new Date('2020-01-01')}
            endDate={new Date()}
            minDate={startDate} 
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <button onClick={handleBuildReports}>Build Reports</button>
      </div>
      <div className="right-panel">
        {loading && <p>Loading data...</p>}
        {error && <p>Error fetching data: {error}</p>}
        {pollutionData && (
          <div className="report-container">
            {displayType === 'summaryData' && (
              <SummaryData data={pollutionData} worstSO2Value={pollutionData.worstSO2Value} />
            )}
            {displayType === 'barGraph' && (
              <BarGraph data={chartData} /> 
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;