
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FullCoverSlider = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="relative w-full h-screen bg-cover bg-center shadow-lg overflow-hidden"
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-all duration-300">
                        <h2 className="text-white text-xl font-bold">{slide.title}</h2>
                        <p className="text-gray-300 text-sm">{slide.location}</p>
                        <p className="text-gray-300 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {slide.description}
                        </p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

FullCoverSlider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FullCoverSlider;