import React from "react"
import Cards from "./Cards"
import data from "../data"

export default function Main() {
    const cards = data.map (item =>{
        return (
            <Cards 
                key={item.key}
                item={item}
            />
        )
    })
    return(
        <div className="main--container">
            {cards}
        </div>
    )
}