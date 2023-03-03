import { useState } from 'react'
import useBooksContext from '../hooks/user-books-context'
function BookCreate() {
    const [title, setTitle] = useState('')
    const {createBook} = useBooksContext()

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title)
    }
    return (
        <div className='book-create'>
        <h3>ADD A BOOK</h3>
            <form onSubmit={handleSubmit}>
                
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button'>Create!</button>
            </form>
        </div>
    )
}
export default BookCreate;