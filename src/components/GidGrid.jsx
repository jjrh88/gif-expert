import { useState, useEffect } from "react"

import { GifItem } from "./GifItem"

import { getGifs } from "../helpers/getGifs"


export const GidGrid = ({ category }) => {


    const [images, setImages] = useState([])
    const [isLoadin, setIsLoadin] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
    }
    useEffect(() => {
        getImages()
    }, [])

    return (
        <>
            <h3> {category} </h3>
            {
                isLoadin && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
