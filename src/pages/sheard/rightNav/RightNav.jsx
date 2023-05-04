import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookSquare, FaGithub, FaTwitterSquare, FaYoutube, FaInstagramSquare, FaGoogle } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { AuthContext } from '../../Provaider/AuthProvider';


const auth = getAuth(app)
const  googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const RightNav = () => {
 const {user} = useContext(AuthContext)
    const handleGithublogin = () =>{
        signInWithPopup(auth , githubProvider)
        .then(result=>{
            const loggeduser = result.user
        })
        .catch(error=>console.log(error))
    }

    const handleGooglesinin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div>
                {!user && <h4>login with</h4>}
               {!user && <Button onClick={handleGooglesinin} variant="outline-primary w-100"> <FaGoogle /> login with google</Button>}
                {!user &&<Button onClick={handleGithublogin} className='mt-4' variant="outline-secondary w-100"><FaGithub /> login with github</Button>}
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
                <img className='w-5' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;