import React from 'react'
import './codercard.css'

export default function CoderCard({name, namelink, photolink, year, rating, maxrating, rank, maxrank}) {
    return (
        <div className="codercard">
            <div className="profile-image">
                <img src={photolink} alt="" srcset="" />
            </div>
            <div className="name">{name}</div>
            <div className="year">{year}</div>
            <div className="content">
                <div className="box">
                    <div className="heading">RATING</div>
                    <div className="rating">{rating}</div>
                    <div className="rank">{rank}</div>
                </div>
                <div className="box">
                    <div className="heading">BEST</div>
                    <div className="rating">{maxrating}</div>
                    <div className="rank">{maxrank}</div>
                </div>
            </div>
        </div>
    )
}