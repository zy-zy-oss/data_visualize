import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: data.categories
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.values,
        type: 'bar'
      }]
    };
    
    chart.setOption(option);
    
    return () => chart.dispose();
  }, [data]);

  return <div ref={chartRef} style={{ height: '300px' }} />;
};

export default BarChart; 