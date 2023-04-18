import CategoryDescription from "./CategoryDescription"
import {useLocation} from "react-router-dom"

function Category(props){
        let url = useLocation();
        let categoryName = props.data.categoryNav.map((item) => (
            <li key={item.category}>
                <a href={`${url.pathname}${item.link}`}>{item.category}</a>
            </li>
        ))
        return(
            <>
               <CategoryDescription/>
                <ul>{categoryName}</ul>
            </>
        )
    }

export default Category