import React from 'react'


const NewsItem = ({ webTitle, webUrl, thumbnail, sectionName }) => {

    return (
        <div className='news-item'>
            <img className='news-image' src={thumbnail} alt='News Image' />

            <h3>
                <a href={webUrl}>{webTitle}</a>
            </h3>

            <p>{sectionName}</p>
        </div>
    );
};

export default NewsItem