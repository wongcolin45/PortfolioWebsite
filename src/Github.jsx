import PropTypes from "prop-types";
import github from './images/github.png';

function Github(props) {
    return (
        <a href={props.link} target="_blank">
            <button className="github">
                Check out on GitHub
            </button>
        </a>
    )
}

export default Github

Github.propTypes = {
    link: PropTypes.string
}