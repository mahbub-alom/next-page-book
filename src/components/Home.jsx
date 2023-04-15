import React, { useEffect, useState } from 'react';

const Home = () => {
    const [items, setItems] = useState([])
    const [limit, setLimit] = useState(3)

    const showMoreItems = () => {
        setLimit(limit + 3)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <div className='row'>
                <div className='grid grid-cols-3 gap-5 m-2'>
                    {
                        items.slice(0, limit).map(item => (
                            < div key={item.cca2}>
                                <div className='bg-sky-600 p-3 rounded-md text-white text-2xl'>
                                    <p>name:{item.name.common}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
            <div className='m-2'>
                <button onClick={showMoreItems} className="w-full text-3xl text-white rounded-full bg-blue-300">see more</button>
            </div>
        </>
    );
};

export default Home;