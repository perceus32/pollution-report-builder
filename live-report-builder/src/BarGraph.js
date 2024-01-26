import React from 'react';
import Chart from 'chart.js/auto';



const BarGraph = ({ data }) => {
  console.log("inside BarGraph");
  const chartRef = React.useRef(null);

  console.log(chartRef.current);
  console.log(data);
  React.useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: false, 
            },
          },
          plugins: {
            title: {
              display: true,
              text: 'CO Levels Chart',
            },
          },
        },
      });
      return () => myChart.destroy(); 
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
