import React, {useState} from 'react';

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    return(
        <div className="input-field mt2">
            <input type="text" value = {title} onChange = {changeHandler} id = "title" placeholder = "Input ToDo name"/>
            <label htmlFor="title" className = "active">Input ToDo name</label>
        </div>
    )
}