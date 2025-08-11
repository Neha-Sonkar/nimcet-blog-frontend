import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="card" style={{width: "80%",backgroundColor:"rgb(33, 37, 41)",color:"white"}}>
            <img src={props.item.image} className="card-img-top" alt="" style={{height:"240px"}}/>
                <div className="card-body">
                    <Link to={`/${props.item.slug}`}><i className="fa-solid fa-arrow-right-long" style={{float:"right",marginTop:"7px",color: "#ffbb00"}}></i></Link>
                    <h5 className="card-title" >{props.item.title}</h5>
                    <p className="card-text text-secondary">{props.item.desc}</p>
                </div>
        </div> 
    )
}

export default Card
