import React from 'react';
import Header from '../pages/sheard/Header/Header';
import Footer from '../pages/sheard/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                     <h1>left navigation</h1>
                    </Col>
                    <Col lg={6}>
                        <h1>main navaigation </h1>
                    </Col>
                    <Col lg={3}>
                        <h1>right navigaston
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;