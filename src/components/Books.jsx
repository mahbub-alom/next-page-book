import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Loader from './Loader';

const Books = () => {
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loader />
    }
    const { books } = useLoaderData()
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
                {books.map(book => (
                    <Book key={book.isbn13} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;