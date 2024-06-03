// Rooms Component
import React from "react";
import Card from '../components/Card';

export default function Rooms() {
    const cardsData = [
        {
            image: '/small.jpg',
            title: 'Cozy Haven Room',
            description: 'Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.',
            price: 'Rs. 1000/night',
        },
        {
            image: '/large.jpg',
            title: 'Spacious Serenity Suite',
            description: 'Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.',
            price: 'Rs. 1500/night',
        },
    ];
    return (
        <div id="rooms" className="w-full h-auto p-44">
            <h3 className="font-semibold">OUR LIVING ROOM <hr /></h3>
            <h3 className="font-semibold text-5xl mt-4 pr-96">The Most Memorable Rest Time Starts Here.</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                    />
                ))}
            </div>
        </div>
    );
}