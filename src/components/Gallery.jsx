import React, { useState } from 'react'
import img1 from '../assets/gallery/_MG_0024-2.jpg'
import img2 from '../assets/gallery/_MG_0029-2.jpg'
import img3 from '../assets/gallery/_MG_0033-2.jpg'
import img4 from '../assets/gallery/_MG_0034-2.jpg'
import img5 from '../assets/gallery/_MG_0039-2.jpg'
import img6 from '../assets/gallery/_MG_0040-2.jpg'
import img7 from '../assets/gallery/_MG_0041-2.jpg'
import img8 from '../assets/gallery/_MG_0042-2.jpg'
import img9 from '../assets/gallery/_MG_0043-2.jpg'
import img10 from '../assets/gallery/_MG_0045-2.jpg'
import img11 from '../assets/gallery/_MG_0046-2.jpg'
import img12 from '../assets/gallery/_MG_0047-2.jpg'
import img13 from '../assets/gallery/_MG_0050-2.jpg'
import img14 from '../assets/gallery/_MG_0051-2.jpg'
import img15 from '../assets/gallery/_MG_0054-2.jpg'
import img16 from '../assets/gallery/_MG_0055-2.jpg'
import img17 from '../assets/gallery/_MG_0056-2.jpg'
import img18 from '../assets/gallery/_MG_0058-2.jpg'
import img19 from '../assets/gallery/_MG_0064-2.jpg'
import img20 from '../assets/gallery/_MG_0065-2.jpg'
import img21 from '../assets/gallery/_MG_0066-2.jpg'
import './Gallery.scss'

const Gallery = () => {
    const images = [
        { src: img1, title: 'sdf', srcLarge: ''},
        { src: img2, title: 'sdf', srcLarge: ''},
        { src: img3, title: 'sdf', srcLarge: ''},
        { src: img4, title: 'sdf', srcLarge: ''},
        { src: img5, title: '', srcLarge: ''},
        { src: img6, title: '', srcLarge: ''},
        { src: img7, title: '', srcLarge: ''},
        { src: img8, title: '', srcLarge: ''},
        { src: img9, title: '', srcLarge: ''},
        { src: img10, title: '', srcLarge: ''},
        { src: img11, title: '', srcLarge: ''},
        { src: img12, title: '', srcLarge: ''},
        { src: img13, title: '', srcLarge: ''},
        { src: img14, title: '', srcLarge: ''},
        { src: img15, title: '', srcLarge: ''},
        { src: img16, title: '', srcLarge: ''},
        { src: img17, title: '', srcLarge: ''},
        { src: img18, title: '', srcLarge: ''},
        { src: img19, title: '', srcLarge: ''},
        { src: img20, title: '', srcLarge: ''},
        { src: img21, title: '', srcLarge: ''},
        { src: img8, title: '', srcLarge: ''},
        { src: img1, title: '', srcLarge: ''},
        { src: img2, title: '', srcLarge: ''},
        { src: img3, title: '', srcLarge: ''},
        { src: img4, title: '', srcLarge: ''},
        { src: img5, title: '', srcLarge: ''},
        { src: img6, title: '', srcLarge: ''},
        { src: img7, title: '', srcLarge: ''},
        { src: img8, title: '', srcLarge: ''},
        { src: img1, title: '', srcLarge: ''},
        { src: img2, title: '', srcLarge: ''},
        { src: img3, title: '', srcLarge: ''},
        { src: img1, title: '', srcLarge: ''},
        { src: img2, title: '', srcLarge: ''},
        { src: img3, title: '', srcLarge: ''},
        { src: img4, title: '', srcLarge: ''},
        { src: img5, title: '', srcLarge: ''},
        { src: img6, title: '', srcLarge: ''},
        { src: img7, title: '', srcLarge: ''},
        { src: img8, title: '', srcLarge: ''},
        { src: img1, title: '', srcLarge: ''},
        { src: img2, title: '', srcLarge: ''},
        { src: img3, title: '', srcLarge: ''},
    ]
    const [selectedImage, setSelectedImage] = useState(null);

    const Item = ({ src, alt, index }) => (
        <li onClick={() => selectImageHandler(index) }>
            <img src={src} alt={alt} />
        </li>
    )

    const LightBox = () => {
        return (
            <div className="overlay" onClick={closeLightBoxHandler}>
                <div className="lightbox-image">
                    <img src={selectedImage.src} alt={selectedImage.title} />
                    <div>{selectedImage.title}</div>
                </div>
            </div>
        )
    }

    const selectImageHandler = (index) => {
        setSelectedImage(images[index])
    }

    const closeLightBoxHandler = () => {
        setSelectedImage(null)
    }

    return (
        <>
           { selectedImage ? <LightBox /> : '' }
            <ul className="gallery">
                {images.map(({ src, title }, index) => (
                    <Item key={`${index}_${src}`} src={src} alt={title} index={index} />
                ))}
            </ul>
        </>
    )
}

export default Gallery
