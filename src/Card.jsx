import React from "react";

function Card(props){
    return(
        <>
            <div className="card">
                <div className="card-img">
                    <img src={props.imgsrc} alt="Poster"/>
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <button >Watch Now</button>
                    </a>
                </div>
                <div className="card_details">
                    <p>{props.title}</p>
                    <h2>{props.sername}</h2>
                </div>
            </div>
        </>
    );
}

export default Card;