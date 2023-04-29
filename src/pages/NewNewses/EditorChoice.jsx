import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const EditorChoice = () => {
    return (
        <div className='mt-5'>
            <CardGroup>
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
                    <Card.Img variant="top" src={second}/>
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
            </CardGroup>
        </div>
    );
};

export default EditorChoice;