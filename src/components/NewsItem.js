import React from 'react'

const NewsItem = ({ webTitle, webUrl, thumbnail }) => {
    return (
        <div>
            <img src={thumbnail} alt='News Image' />

            <h3>
                <a href={webUrl}>{webTitle}</a>
            </h3>

            <p>bop</p>
        </div>
    )
}

export default NewsItem