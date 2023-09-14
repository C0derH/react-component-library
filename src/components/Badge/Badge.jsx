import React from "react"
import colors  from '../../assets/colors.js'
import classNames from 'classnames'

export default function Badge({children,color,shape,className}){
    // Determining shape class according to user's shape prop
    const shapeClass = shape ? `badge-${shape}` : ""
    // Classnames JavaScript utility  joining classNames together. 
    const badgeClasses = classNames(className,shapeClass,"badge")
    
    return (
        <div className={badgeClasses} style={colors[color]}>
            {children}
        </div>
    )
}