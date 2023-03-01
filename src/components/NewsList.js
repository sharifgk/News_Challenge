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
            console.dir(res);
            setArticles(res.data.results);

            //console.dir(res.data);
        }



        getArticles();
    }, []);

    return (
        <div>{

            articles.map(({ id, webTitle, webUrl, fields: { thumbnail }, sectionName }) => (
                <NewsItem
                    key={id}
                    webTitle={webTitle}
                    sectionName={sectionName}
                    webUrl={webUrl}
                    thumbnail={thumbnail} />
            ))
        }
        </div>
    );
};

export default NewsList