import React from  'react'

const GalleryItem = ({ src, alt, index, selectImageHandler }) => (
    <li onClick={() => selectImageHandler(index) }>
        <img src={src} alt={alt} />
    </li>
)

export default GalleryItem