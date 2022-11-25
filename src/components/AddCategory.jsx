import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onChange = e => setInputValue(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        const valueTrim = inputValue.trim()
        if(valueTrim.length <= 1) return
        onNewCategory(valueTrim)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                value={inputValue}
                placeholder="Buscar gifs"
                onChange={onChange}
            />
        </form>
    )
}