import React, { useEffect } from 'react';
import {fetchBookDetails} from './Books'
const BookCard = ({books,onBookClick}) => {
    return (
        <div className='flex flex-wrap justify-evenly w-full h-full gap-[10px] mt-10'>
            {books.map(({ title, cover, author }, i) => (
                <div
                    key={i}
                    className='flex flex-col w-[300px] h-[400px] rounded-2xl border-[1px] border-solid border-black book-card-container mb-[10px] overflow-hidden'
                    onClick={() => onBookClick(title)}
                >
                    <div className='flex flex-col items-center'>
                        <img
                            className='object-cover w-full h-[300px] rounded-2xl'
                            src={cover}
                            alt={title}
                        />
                        <div className='flex flex-col items-center justify-center bg-black w-full'>
                            <h1 className='text-2xl text-white text-center pt-2 font-bold'>
                                {title}
                            </h1>
                            <span className='text-lg text-yellow-600 font-bold text-center h-[100px]'>
                                {author}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookCard;
