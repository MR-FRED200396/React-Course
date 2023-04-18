import { Link } from 'react-router-dom';

function Header(props) {
    let mainNav = props.data.mainNav.map((item) => (
        <li key={item.category}>
            <Link to={item.link}>{item.category}</Link>
        </li>
    ));

    return (
        <nav>
            <div></div>
            <ul>{mainNav}</ul>
        </nav>
    );
}

export default Header;
