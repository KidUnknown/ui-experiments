import React from 'react';

import './Banner.css';

const Banner = ({image, children, title }) => {
    return (
        <section style={{backgroundImage: `url(${image})`}} className="banner">
            <div className="inner">
                <h2>{ title }</h2>
                { children }
            </div>
        </section>
    )
}
export default Banner;