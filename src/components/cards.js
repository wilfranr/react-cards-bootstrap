import React from 'react'
import Card from './card'
import image1 from '../assets/imagen1.png'
import image2 from '../assets/imagen2.png'
import image3 from '../assets/imagen3.png'

const Cards = [
    {
        id: 1,
        title: 'Facebook',
        image: image1,
        url: 'http://facebook.com'
    },
    {
        id: 2,
        title: 'Youtube',
        image: image2,
        url: 'http://youtube.com'
    },
    {
        id: 3,
        title: 'Twitter',
        image: image3,
        url: 'http://twitter.com'
    },
]

function cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">

            <div className="row">
                {
                    Cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default cards
