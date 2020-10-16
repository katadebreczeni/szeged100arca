import React from 'react'
import './LightBox.scss'

const LightBox = ({selectedImage, closeLightBoxHandler, nextImageHandler, prevImageHandler}) => {
    return (
        <>
            <button className="nextBtn" onClick={nextImageHandler}>next</button>
            <button className="prevBtn" onClick={prevImageHandler}>prev</button>
            <div className="overlay" onClick={closeLightBoxHandler}>
                <div className="lightbox-image">
                    <img src={selectedImage.src} alt={selectedImage.title} />
                    <div>{selectedImage.title}</div>
                </div>
            </div>
        </>
    )
}

export default LightBox