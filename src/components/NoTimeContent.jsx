import { Statistic, Row, Col } from 'antd';
import React, { Component } from 'react';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

class onFinish extends Component {




  render() {
    return (
      <div style={{color:"white"}}>
      <Row gutter={16} valueStyle={{color:"#fff"}}>
        
        <Col span={12}>
          <Countdown title="" value={deadline} format="HH:mm:ss:SSS" valueStyle={{color:"wheat"}}/ >
        </Col>
       
      </Row>
      </div>
 )
}

}

export default onFinish
