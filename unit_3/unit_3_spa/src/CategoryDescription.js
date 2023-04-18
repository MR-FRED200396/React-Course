import { Link, useParams } from "react-router-dom"

function CategoryDescription(){
    let {userName} = useParams();
    return(
    <>
    <Link to="/cat">Назад</Link>
      <h1>Category</h1>
      <h3>Name: {userName}</h3>
    </>
    )
}

export default CategoryDescription