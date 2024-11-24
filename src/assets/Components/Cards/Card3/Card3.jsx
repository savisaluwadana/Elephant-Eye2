import PropTypes from "prop-types";
import "../Card3/card3.css";
import Button from '@mui/material/Button';
import HotelIcon from '@mui/icons-material/Hotel';

const Card3 = ({ imageUrl, title, location, description }) => {
    return (
        <div className="relative w-full sm:w-96 h-auto bg-cover bg-center shadow-lg overflow-hidden group">
            <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="p-4 bg-white">
                <h2 className="text-black text-3xl font-bold text-left">{title}</h2>
                <p className="text-gray-700 text-xl text-left">{location}</p>
                <p className="text-gray-700 text-lg mt-2 text-left">{description}</p>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<HotelIcon />}
                    className="mt-4"
                >
                    Book Now
                </Button>
            </div>
        </div>
    );
};

Card3.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card3;