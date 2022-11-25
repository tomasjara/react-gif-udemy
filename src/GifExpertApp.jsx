import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        setCategories([...categories, newCategory])
    }

    return(
        <>
            <h1>GifAPP</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />
          
            { 
                categories.map(category => 
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                )
            }
      
        </>
    )
}