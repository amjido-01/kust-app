import React from "react";
import axios from "axios";
import { useState } from "react";

export const Books = () => {
  //   const test = import.meta.env.VITE_YOUR_GOOGLE_API_KEY;
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("")
  //   const [freeBooks, setFreeBooks] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim().length === "") {
      return;
    }

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(
          query
        )}&limit=10`
      );
      const res = response.data;
      console.log(res);
      const filteredBooks = res.docs.filter((book) => book.cover_i)
      if (filteredBooks.length > 0) {
        setBooks(filteredBooks);
        setMessage("");
      } else {
        setMessage("No such book found.");
      }

      //   const filteredBooks = res.items.filter((book) => {
      //     return !book.saleInfo || book.saleInfo.isEbook;
      //   });
      //   setFreeBooks(filteredBooks);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-red-500"
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button className="border-2 border-red-500" type="submit">
          Search
        </button>
      </form>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.key}>
              {/* <h3>{book.volumeInfo.title}</h3> */}
              <h2>{book.title}</h2>

              {/* <h3>{book.volumeInfo.imageLinks.thumbnail}</h3> */}
              {/* <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Thumbnail"
              /> */}
              {/* <p>Author: {book.volumeInfo.authors}</p> */}
              <p>Author: {book.author_name?.[0]}</p>
              {/* <p>Description: {book.volumeInfo.description}</p> */}
              <p>First Published: {book.first_publish_year}</p>
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt="Book Cover"
                />
              )}
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </a>

              {/* <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </a> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};
