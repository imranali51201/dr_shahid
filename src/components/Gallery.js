import React from 'react'
import './Gallery.css'
import Gallery from 'react-grid-gallery'
import pic1 from '../images/pic1.jpeg'
import pic2 from '../images/pic2.jpg'
import kaistLogo from '../images/kaistLogo.png'
import nedLogo from '../images/nedlogo.png'
import mehranLogo from '../images/mehranlogo.png'
import ProfilePic from '../images/picture.jpg'

function images() {
    const IMAGES =
        [{
            src: pic1,
            thumbnail: pic1,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
        },
        {
            src: pic2,
            thumbnail: pic2,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
        },

        {
            src: kaistLogo,
            thumbnail: kaistLogo,
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },
        {
            src: nedLogo,
            thumbnail: nedLogo,
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },
        {
            src: mehranLogo,
            thumbnail: mehranLogo,
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },
        {
            src: ProfilePic,
            thumbnail: ProfilePic,
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }
    ]

    return (
        <div className="galleryMain">
            <Gallery images={IMAGES} />
        </div>
    )
}

export default images
