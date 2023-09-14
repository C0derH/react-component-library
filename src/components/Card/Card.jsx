import React from "react"
import { FaCloudUploadAlt } from 'react-icons/fa'

export default function Card({
    children,
    icon = <FaCloudUploadAlt/>,
    iconBackgroundColor = "#3F75FE",
    cardClasses
}){

    // Define styles for the icon's background color
    const styles = {
        backgroundColor : iconBackgroundColor
    }

    return (
        <div className={`card ${cardClasses}`}>
            <div className="icon-wrapper" style={styles}>
                {icon}
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}