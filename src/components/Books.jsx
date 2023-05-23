import React from "react";
import axios from "axios";
import { useState } from "react";

export const Books = () => {
  const test = import.meta.env.VITE_YOUR_GOOGLE_API_KEY;
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [freeBooks, setFreeBooks] = useState([]);

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
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&key=${test}`
      );
      const res = response.data;
      console.log(res);
      setBooks(res.items || []);

      const filteredBooks = res.items.filter((book) => {
        return !book.saleInfo || book.saleInfo.isEbook;
      });
      setFreeBooks(filteredBooks);
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
      {freeBooks.length > 0 ? (
        <ul>
          {freeBooks.map((book) => (
            <li key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <h3>{book.volumeInfo.imageLinks.thumbnail}</h3>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Thumbnail"
              />
              <p>Author: {book.volumeInfo.authors}</p>
              <p>Description: {book.volumeInfo.description}</p>
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No free books found.</p>
      )}
    </div>
  );
};
