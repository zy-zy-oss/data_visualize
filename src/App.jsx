import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <DashboardLayout />
    </ConfigProvider>
  );
}

export default App; 