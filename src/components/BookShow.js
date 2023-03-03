import { useState } from 'react'
import useBooksContext from '../hooks/user-books-context';
import BookEdit from './BookEdit';


function BookShow({book}) {
const {editBookById, deleteBookById} = useBooksContext()

    const [showEdit, setShowEdit] = useState(false);
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }
    const handleEditClick = (id, newTitle) => {
        setShowEdit(!showEdit)
        editBookById(id, newTitle)

    }
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleEditClick}/>
    }
    return (
        <div className="book-show">
        <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div>{content}</div>
            <div className="actions">
                <button className='edit' onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>

    )
}
export default BookShow;