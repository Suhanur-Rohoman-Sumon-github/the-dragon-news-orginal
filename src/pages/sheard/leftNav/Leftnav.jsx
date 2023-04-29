import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const Leftnav = () => {
    const [catagoris, setCatagorise] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagoris')
            .then(res => res.json())
            .then(data => setCatagorise(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div >
            <h4>all catagory  </h4>
            <div className='ms-4'>
                {
                    catagoris.map(catagory => <p
                        key={catagory.id}

                    >
                        <Link to={`/catagory/${catagory.id}`} className='text-decoration-none text-black'>{catagory.name}</Link>
                    </p>)
                }
                <div className='mt-4'>
                <Card>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Text>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={second} />
                    <Card.Body>
                        <Card.Text>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Text>
                            21 The Most Stylish Wedding Guest Dresses For Spring
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default Leftnav;