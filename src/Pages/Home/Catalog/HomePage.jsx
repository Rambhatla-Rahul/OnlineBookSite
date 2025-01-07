import React, { useState } from 'react';
import SearchBarComponent from './Components/SearchBarComponent';
import BookCard from './Components/BookCard';

const HomePage = () => {
  const [books, setBooks] = useState([]); // State to store the list of books

  return (
    <>
      <div>
        <SearchBarComponent setBooks={setBooks} />
      </div>

      <div className='flex w-full p-4 flex-wrap'>
        <BookCard books={books} />
      </div>
    </>
  );
};

export default HomePage;
