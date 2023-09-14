import React from "react"
// Importing of icons from Font Awesome
import { FaCheckCircle,FaExclamationTriangle,FaTimesCircle,FaInfoCircle } from 'react-icons/fa'
import classNames from 'classnames'

export default function Banner({
    title ="Update available",
    text ,
    status = "neutral",
    className
}){

    let statusIcon
    // Conditionals for determining icon according to user prop
    if(status === "success"){
        statusIcon = <FaCheckCircle className="success-icon"/>
    } else if(status === "warning"){
        statusIcon = <FaExclamationTriangle className="warning-icon"/>
    } else if(status === "error"){
        statusIcon = <FaTimesCircle className="error-icon"/>
    } else {
        statusIcon = <FaInfoCircle className="neutral-icon"/>
    }
    const statusClass = `banner-${status}`
    // Classnames JavaScript utility  joining classNames together. 
    const bannerClasses = classNames(statusClass,className,"banner")
    
    return (
        <div className={bannerClasses}>
            {statusIcon}
            <div className="banner-text">
                <h4>{title}</h4>
                {text ? <p>{text}</p>  : ""}
            </div>
        </div>
    )
    
}