import React, { useState, useEffect } from 'react';
import { Layout, Card, Row, Col, Radio } from 'antd';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';
import DataSummary from './DataSummary';
import { salesData, userDistribution, productCategories } from '../data/mockData';
const { Content } = Layout;
const DashboardLayout = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
  };
  return (
    <Layout>
      <Content style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <Radio.Group value={timeRange} onChange={handleTimeRangeChange}>
            <Radio.Button value="monthly">月度</Radio.Button>
            <Radio.Button value="quarterly">季度</Radio.Button>
          </Radio.Group>
        </div>  
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <DataSummary data={salesData[timeRange]} />
          </Col>
          <Col span={24}>
            <Card 
              title="销售趋势" 
              bodyStyle={{ height: 400 }} 
            >
              <LineChart data={salesData[timeRange]} />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              title="用户分布" 
              bodyStyle={{ height: 300 }}
              style={{ height: '100%' }}
            >
              <PieChart data={userDistribution} />
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card 
              title="产品类别分析" 
              bodyStyle={{ height: 300 }}
              style={{ height: '100%' }}
            >
              <BarChart data={productCategories[timeRange]} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
export default DashboardLayout;