import React, { useState, useEffect } from "react";
import Axios from "axios";

const ArticleDetail = (props) => {
    const [article, setArticle] = useState({});

    useEffect(() => {
        const getArticle = async () => {
            const res = await Axios.get(
                `http://localhost:3000/response/${props.match.params.id}`
            );
            setArticle(res.data);
        };

        getArticle();
    }, [props.match.params.id]);

    return (
        <div>
            <h1>{article.webTitle}</h1>
            <img src={article.fields?.thumbnail} alt="Article Thumbnail" />
            <p>{article.fields?.bodyText}</p>
        </div>
    );
};

export default ArticleDetail;