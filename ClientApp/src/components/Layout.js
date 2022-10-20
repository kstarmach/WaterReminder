import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavMenu } from './NavMenu';
import SideBar from './SideBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container fluid>
          <Row>
            <Col xs={0} xl={1} >
              <SideBar />
            </Col>
            <Col >
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
