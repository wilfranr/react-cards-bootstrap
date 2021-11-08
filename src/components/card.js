import React from 'react'

function Card({title, imageSource, url}) {
    return (
        <div className="card text-center bg-dark" >
            <img src={imageSource} alt="" />
            <div className="card-body text-light" >
                <h4 className="card-title" >{title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae aliquid cupiditate aspernatur facere ratione ullam magnam, distinctio suscipit ea, nesciunt voluptates odio dolorum iusto sed possimus adipisci, vel consequuntur?</p>
                <a href={url} className="btn btn-outline-secondary" target="_blank">Got to Website</a>
            </div>
        </div>
    )
}

export default Card
