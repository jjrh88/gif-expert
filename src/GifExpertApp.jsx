import { useState } from "react"
import AddCateogory from "./components/AddCateogory"
import { GidGrid } from "./components/GidGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        //setCategories([...categories, 'Spider Man'])
        //setCategories((cat => [...cat, 'Valorant']))
        //console.log(newCategory)
        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCateogory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GidGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
