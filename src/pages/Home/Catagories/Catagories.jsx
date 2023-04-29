import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Newscards/NewsCard';

const Catagories = () => {
    const {id}= useParams()
    const catagoryNews = useLoaderData()

    return (
        <div >
            {id && <h5>this catagory news : {catagoryNews.length}</h5>}
            {
                catagoryNews.map(newses => <NewsCard 
                key={newses._id}
                newses={newses}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagories;