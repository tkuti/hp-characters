import React from 'react'
import loading from '../image/loading.png'

function LoadingMask() {
    return (
        <div className="loading">
            <img src={loading} alt=""/>
        </div>
    )
}

export default LoadingMask
