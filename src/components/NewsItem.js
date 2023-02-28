import React from 'react'

const NewsItem = ({ title, description, url, imgUrl }) => {
    return (
        <div>
            <img src={imgUrl} alt='News Image' />

            <h3>
                <a href={url}>{title}</a>
            </h3>

            <p>{description}</p>
        </div>
    )
}

export default NewsItem