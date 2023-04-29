import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorChoice from '../../NewNewses/EditorChoice';
const SingleNews = () => {
    const SingleNews = useLoaderData()
    const { details, image_url, title,category_id } = SingleNews
    return (
        <div>
            <h1>dragon news</h1>
            <Card width-100>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}><Button variant="danger"><FaArrowLeft /> All news in this catagory</Button></Link>
                </Card.Body>
            </Card>
            <EditorChoice />
        </div>
    );
};

export default SingleNews;