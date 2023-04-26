import React from 'react';
import Header from '../pages/sheard/Header/Header';
import Footer from '../pages/sheard/footer/Footer';
import Leftnav from '../pages/sheard/leftNav/Leftnav';
import MainContent from '../pages/sheard/main/MainContent';
import RightNav from '../pages/sheard/rightNav/RightNav';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                     <Leftnav ></Leftnav>
                    </Col>
                    <Col lg={6}>
                       <MainContent ></MainContent>
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

export default Main;