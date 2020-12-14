import React from 'react';
import './Skeleton.css';
const skeletonElement=({ type })=>{
    const classes=`skeleton ${type}`;
    return(
        <div className="classes"></div>
    )
}
export default skeletonElement;