import React, { useState } from 'react'
import axios from 'axios';

function DisplayBooks() {

    const [ books, setBooks ] = useState([]);

    axios.get("http://localhost:3000/books")
        .then((response) => {
            console.log(response.data)
            setBooks(response.data)
        })

    return (
        <>
            {books.map((book, idx) => {
                return <div key={idx}>
                    <h1>{book.title}</h1>
                    <h5>{book.isbn}</h5>
                    <h5>{book.author}</h5>
                    <h5>{book.published_date}</h5>
                    <h5>{book.publisher}</h5>
                    <h5>{book.numOfPages}</h5>
                </div>
            })}
        </>
    )
};

export default DisplayBooks;