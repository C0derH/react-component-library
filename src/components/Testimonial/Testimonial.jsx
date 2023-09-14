import React from "react"
import workcationlogo from "../../assets/images/Logo.svg"
import divider from "../../assets/images/Divider.svg"


export default function Testimonial({
    quote,
    name,
    role,
    logo = workcationlogo}){


    return (
        
        <div className="testimonial">
            <div className="testimonial-content">
                <div className="testimonial-logo-container">
                    <img className="testimonial-logo" src={logo}/>
                </div>
                <p className="testimonial-quote">{quote} </p>
                <div  className="testimonial-footer">
                    <p className="testimonial-name">{name}</p>
                    <img className="divider-icon" src={divider}/>
                    <p className="testimonial-role">{role}</p>
                </div>
            </div>
        </div>
    )
}