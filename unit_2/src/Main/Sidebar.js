import Nav from '../Header/Nav';

function Sidebar(props) {
    return (
        <ul>
            <li>Страница 1</li>
            <li>Страница 2</li>
            <li>Страница 3</li>
            <Nav nav={props.data.nav} />
        </ul>
    );
}

export default Sidebar;
