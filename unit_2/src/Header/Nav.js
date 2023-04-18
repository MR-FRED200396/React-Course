function Nav(props) {
    const listItem = props.nav.map((item) => (
        <li key={item.link}>
            <a href={item.link}>{item.text}</a>
        </li>
    ));

    return (
        <nav>
            <ul className="main-navigation">{listItem}</ul>
        </nav>
    );
}

export default Nav;
