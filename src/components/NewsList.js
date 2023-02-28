import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import NewsItem from './NewsItem';


const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get(
                `http://localhost:3000/response`
            );

            //setArticles(res.response.results);
            //console.dir(res.response.results);
            console.dir(res.data);
        }



        getArticles();
    });

    return (
        <div>
            {articles.map(({ title, description, url, imgUrl }) => (
                <NewsItem
                    title={title}
                    description={description}
                    url={url}
                    imgUrl={imgUrl} />
            ))}
        </div>
    );
};

export default NewsList