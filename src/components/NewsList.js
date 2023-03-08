import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import NewsItem from './NewsItem';


const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get(process.env.REACT_APP_GUARDIAN_API);
            console.dir(res);
            setArticles(res.data.response.results);

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