import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookSquare, FaGithub,FaTwitterSquare,FaYoutube,FaInstagramSquare,FaGoogle } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>login with</h4>
                <Button variant="outline-primary w-100"> <FaGoogle /> login with google</Button> <br />
                <Button className='mt-4' variant="outline-secondary w-100"><FaGithub /> login with github</Button>
            </div>
            <div className='mt-5'>
                <h4>find us on </h4>
                <ListGroup >
                    <ListGroup.Item className='p-3'> <FaFacebookSquare /> facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'> <FaYoutube /> you tube</ListGroup.Item>
                    <ListGroup.Item className='p-3'> <FaTwitterSquare /> twiter</ListGroup.Item>
                    <ListGroup.Item className='p-3'> <FaInstagramSquare /> insta gram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone />
            <div className='mx-auto mt-4' >
            <img className='w-5'  src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;