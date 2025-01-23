import React from 'react'

const Cards = ({item}) => {
    // console.log(item);
    return (
        <>
            <div className='mt-5 my-3'>
                <div className="card w-96 shadow-2xl mt-4 hover:scale-105 duration-200 dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="book"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                         {item.title}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline  cursor-pointer hover:bg-blue-700 h-[30px] hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
