import CategoryDescription from './CategoryDescription';
import { Link, useLocation } from 'react-router-dom';

function Category(props) {
    let url = useLocation();
    let categoryName = props.data.categoryNav.map((item) => (
        <li key={item.category}>
            <Link to={`${url.pathname}${item.link}`}>{item.category}</Link>
        </li>
    ));

    return (
        <>
            <CategoryDescription />
            <ul>{categoryName}</ul>
        </>
    );
}

export default Category;
