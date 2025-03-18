import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: '10%',
        right: '3%',
        left: '3%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: {
          interval: 0,
          rotate: window.innerWidth < 768 ? 30 : 0
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data.values,
        type: 'line',
        smooth: true
      }]
    };
    
    chart.setOption(option);

    // 添加窗口resize监听
    const handleResize = () => {
      chart.resize();// 监听窗口大小变化
    };
    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default LineChart; 