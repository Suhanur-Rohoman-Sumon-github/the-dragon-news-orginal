import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import moment from 'moment/moment';
import Rating from 'react-rating';

const NewsCard = ({ newses }) => {
    const { _id, author, details, image_url,rating, title, total_view } = newses;
    const { name, published_date, img } = author;
    const { number, badge } = rating;
    return (
        <div className='mt-4'>
            <Card>
                <Card.Header className='d-flex align-items-center justify-content-between'>

                    <div className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={img} roundedCircle />
                        <div className='ms-3 '>

                            <p className='mb-0'>{name}</p>
                            <small>{moment(published_date).format('YYYY - MM -D')} </small>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-4' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant="top" src={image_url} />
                        <p>
                            {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} <Link to={`/news/${_id}`}>read more</Link></>}
                        </p>
                        <footer className="  d-flex justify-content-between">
                            <div className='d-flex'>
                                <Rating
                                    placeholderRating={number}
                                    readonly
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar className='text-warning' />}
                                    fullSymbol={<FaStar />}
                                />
                                <p className='ms-2'>{number}</p>
                            </div>
                            <div className='d-flex  align-items-center'>
                                <div>
                                    <FaEye />
                                </div>
                                <div className='ms-2'>
                                    {total_view}
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsCard;