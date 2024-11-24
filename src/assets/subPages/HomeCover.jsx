
import Hotelcover from "../img/common/common.jpg";

const HomeCover = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Hotelcover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
        </div>
    );
};

export default HomeCover;