import React from 'react';
import Header from '../pages/sheard/Header/Header';
import Footer from '../pages/sheard/footer/Footer';
import RightNav from '../pages/sheard/rightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const News = () => {
    return (
        <div>

            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet ></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav ></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default News;