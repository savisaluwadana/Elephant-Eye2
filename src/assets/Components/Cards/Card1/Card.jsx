import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ imageUrl, title, location, description }) => {
    return (
        <div
            className="relative w-full sm:w-96 h-[500px] bg-cover bg-center shadow-lg overflow-hidden group"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 transition-all duration-300">
                <h2 className="text-white text-3xl font-bold text-center transition-all group-hover:translate-y-[-100%]">{title}</h2>
                <p className="text-gray-300 text-xl text-center transition-all group-hover:translate-y-[-100%]">{location}</p>
                <p className="text-gray-300 text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    {description}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;