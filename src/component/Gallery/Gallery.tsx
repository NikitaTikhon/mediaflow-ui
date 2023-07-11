import React, {FC} from 'react';
import GalleryList from "./GalleryList/GalleryList";
import {Photo} from "../../type/Photo";

const photos: Photo[] = [
    {id: 1, imageURL: "./img.jpg", name: 'World', year: 1999},
    {id: 2, imageURL: "./img2.jpg", name: 'Earth', year: 1999},
    {id: 3, imageURL: "./img5.jpg", name: 'Animals', year: 2000},
    {id: 4, imageURL: "./img4.jpg", name: 'Animals', year: 2000},
    {id: 5, imageURL: "./img6.jpg", name: 'Animals', year: 2000},
    {id: 6, imageURL: "./img2.jpg", name: 'Animals', year: 2000},
    {id: 7, imageURL: "./img7.jpg", name: 'Animals', year: 2000},
    {id: 8, imageURL: "./img5.jpg", name: 'Animals', year: 2000},
    {id: 9, imageURL: "./img7.jpg", name: 'Animals', year: 2000},
    {id: 10, imageURL: "./img6.jpg", name: 'Animals', year: 2000},
    {id: 11, imageURL: "./img3.jpg", name: 'Animals', year: 2000},
    {id: 12, imageURL: "./img2.jpg", name: 'Animals', year: 2000},
    {id: 13, imageURL: "./img4.jpg", name: 'Animals', year: 2000},
    {id: 14, imageURL: "./img5.jpg", name: 'Animals', year: 2000},
]
const Gallery: FC = () => {
    return (
        <div>
            <GalleryList photos={photos}/>
        </div>
    );
};

export default Gallery;