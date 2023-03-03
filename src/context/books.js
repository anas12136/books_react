import {createContext, useState, useCallback} from 'react'
import axios from 'axios'

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);

    const fetchedBooks = useCallback(async()=>{
      const response = await axios.get('http://localhost:3003/books')
      setBooks(response.data)
    },[])

    const createBook = async(title) => {
        const response = await axios.post('http://localhost:3003/books',{
          title
        })
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks)
      }
      const deleteBookById= async(id)=>{
        const response = await axios.delete(`http://localhost:3003/books/${id}`)
        setBooks(response.data)
      }
      const editBookById = async(id, newtitle)=>{
        const response = await axios.put(`http://localhost:3003/books/${id}`,{
        title : newtitle
        })
        const updatedBooks = books.map((book)=>{
          if(book.id === id){
            return {...book, ...response.data}
            
          }
          return book;
        }) ;
        setBooks(updatedBooks)
      
      }
      const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchedBooks
      }
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider}
export default BooksContext; 