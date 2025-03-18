import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: window.innerWidth < 768 ? 'horizontal' : 'vertical',
        right: window.innerWidth < 768 ? 'center' : 10,
        top: window.innerWidth < 768 ? 'bottom' : 'center',
        type: 'scroll'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        data: data,
        label: {
          show: window.innerWidth >= 768
        }
      }]
    };
    
    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default PieChart; 