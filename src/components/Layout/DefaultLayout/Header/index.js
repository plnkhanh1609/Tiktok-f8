import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/following">Following</Link>
                <Link to="/upload">Upload</Link>
            </nav>
        </nav>
    );
}

export default Header;
