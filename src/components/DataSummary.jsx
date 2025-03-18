import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';

const DataSummary = ({ data }) => {
  const totalSales = data.values.reduce((acc, curr) => acc + curr, 0);
  const avgSales = totalSales / data.values.length;

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic
            title="总销售额"
            value={totalSales}
            prefix="¥"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="平均销售额"
            value={avgSales.toFixed(2)}
            prefix="¥"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title="数据周期"
            value={data.labels.length}
            suffix="个"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default DataSummary; 