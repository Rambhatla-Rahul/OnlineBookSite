import React from 'react';
import { FaSearch } from "react-icons/fa";
import { fetchBookDetails } from './Books';

const SearchBarComponent = ({ setBooks }) => {
  async function handleInput(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('search-bar').value;

    const response = await fetchBookDetails(searchQuery);
    if (response) {
      setBooks(response); // Pass the fetched book details to the parent component
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleInput(e);
    }
  }

  return (
    <div className='flex w-full justify-center mt-10'>
      <div className='flex w-[600px] justify-center'>
        <div className='flex w-1/2 h-10 border-2 bg-white border-gray-600 rounded-3xl items-center justify-between'>
          <input
            type="text"
            placeholder='Search...'
            className='ml-4 w-3/4'
            id='search-bar'
            onKeyDown={handleKeyDown}
          />
          <FaSearch
            className='hover:text-gray-600 cursor-pointer mr-4 text-[20px]'
            onClick={handleInput}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarComponent;
