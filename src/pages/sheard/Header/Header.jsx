import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    
    return (
        <div>
            <Container >
                <div className="text-center">
                    <img src={logo} alt="" />
                    <p>Journalism Without Fear or Favour</p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex align-items-center bg-light p-2'>
                    <Button variant="danger">Latest</Button>
                    <Marquee speed={50}>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Marquee>
                </div>
            </Container>
        </div>
    );
};

export default Header;