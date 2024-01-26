import React from 'react';

const SummaryData = ({ data, worstSO2Value }) => {
  return (
    <div>
      <h2>Pollution Summary</h2>
      <p>
        Worst SO2 Value: {worstSO2Value}
      </p>
    </div>
  );
};

export default SummaryData;