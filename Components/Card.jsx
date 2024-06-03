// components/Card.jsx
import React from 'react';
import { FaHeart, FaBookmark } from 'react-icons/fa';

const Card = ({ image, title, description, price }) => {

    const whatsappNumber = "919007062180";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="max-w-sm h-[530px] mt-16 rounded-xl overflow-hidden shadow-lg">
            <div>
                <img className="w-full" src={image} alt={title} />
                <div className="z-50 flex justify-end -mt-12 mr-2 gap-3">
                    <button className="bg-white z-51 right-20 rounded-full p-3 shadow">
                    <FaHeart className="text-red-500" />
                    </button>
                    <button className="bg-white z-51 cursor-pointer rounded-full p-3 shadow">
                    <FaBookmark className="text-blue-500" />
                    </button>
                </div>
            </div>
            <div className="mt-2 px-6 py-4">
                <div className="font-semibold text-xl mb-2">{title}</div>
                <p className="text-base text-slate-500 pr-3">
                    {description}
                </p>
                <div className='text-slate-500 mt-2'>Starting from <span className='text-xl text-black ml-1'>{price}</span></div>
            </div>
            <div className='mt-2 px-6 py-3'>
                <a className="text-white text-base font-semibold bg-custom-pink rounded-md px-6 py-3" href={whatsappUrl}>BOOK NOW</a>
            </div>
        </div>
    );
};

export default Card;
