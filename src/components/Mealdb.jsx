import React, { useEffect, useState } from 'react';

const Mealdb = () => {
    const [limits, setLimit] = useState([])
    const [visible, setVisible] = useState(3)

    const loaderData = () => {
        setVisible(visible + 3)
    }

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setLimit(data.categories))
    }, [])
    return (
        <div>
            <div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        limits.slice(0, visible).map(limit => (
                            < div className='text-center m-3  p-5' key={limit.idCategory} >
                                <span className='bg-green-400 p-4 rounded-md m-5'>{limit.strCategory}</span>
                                <img className='mt-5' src={limit.strCategoryThumb} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className='m-2 p-2'>
                    <button onClick={loaderData} className='w-full bg-sky-500 p-5 text-3xl text-purple-500 rounded-md'>see more</button>
                </div>
            </div>
        </div >
    );
};

export default Mealdb;