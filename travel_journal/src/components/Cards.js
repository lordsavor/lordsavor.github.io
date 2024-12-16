import React from "react"

export default function Main(props) {
    console.log(props)
    return(
        <div className="cards--container">
            <div className="cards--content">
                <div className="cards--image-container">
                    <img className="cards--image" src={props.item.imageUrl} />
                </div>
                <div className="content--container">
                    <div className="content--location">
                        <i class='bx bxs-map'></i>
                        <h4>{props.item.location}</h4>
                        <a href={props.item.googleMapsUrl}>View on google maps</a>
                    </div>
                    <div className="content--title">
                        <h1>{props.item.title}</h1>
                    </div>
                    <div className="content--date">
                        <h2>{props.item.startDate} - {props.item.endDate}</h2>
                    </div>
                    <div className="content--description">
                        <p>{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}