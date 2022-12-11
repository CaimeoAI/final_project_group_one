import React from 'react'
import { Panel, Placeholder, Row, Col } from 'rsuite';

const Card = props => (
    <Panel {...props} bordered header="Card title">
      <Placeholder.Paragraph />
    </Panel>
  );

function Panel1() {
  return (
    <Row>
    <Col md={6} sm={12}>
      <Card />
    </Col>
    <Col md={6} sm={12}>
      <Card />
    </Col>
    <Col md={6} sm={12}>
      <Card />
    </Col>
    <Col md={6} sm={12}>
      <Card />
    </Col>
  </Row>
  )
}

export default Panel1;
