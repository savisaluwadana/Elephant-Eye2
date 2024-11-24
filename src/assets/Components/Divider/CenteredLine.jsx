
import PropTypes from "prop-types";

const CenteredLine = ({ className }) => {
    return (
        <div className={`w-full px-4 ${className}`}>
            <div className="w-full border-t border-gray-300 mt-8"></div>
        </div>
    );
};

CenteredLine.propTypes = {
    className: PropTypes.string,
};

CenteredLine.defaultProps = {
    className: "",
};

export default CenteredLine;