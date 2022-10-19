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
            <Col xs={1} >
              <SideBar />
            </Col>
            <Col className='me-5'>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
