import { useState } from 'react';
import useBooksContext from '../hooks/user-books-context';
function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title)
    const {editBookById} = useBooksContext()
    const handleOnSubmit = (event) => {
        event.preventDefault()
        onSubmit();
        editBookById(book.id, title)
    }
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    return (
        <div>
            <form className="book-edit" onSubmit={handleOnSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Save</button>
            </form>
        </div>
    )
}
export default BookEdit;