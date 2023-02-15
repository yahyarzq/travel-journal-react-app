import React from "react";
import Pin from "../icon/pin.png"
export default function Card (props){
    return (
        <div className="app-card">
            <img src={props.item.imgeUrl} alt="Cover"/>
            <div className="card-details">
                <div className="card-location">
                    <img src={Pin} alt="Star"/>
                    <p className="card-location-place">{props.item.location}</p>
                    <p>View on Google Maps</p>
                </div>
                <div>
                    <h1>{props.item.title}</h1>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}