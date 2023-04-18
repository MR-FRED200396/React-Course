import { useParams } from "react-router-dom"

function CategoryDescription(){
    let {userName} = useParams();
    return(
    <>
    <a href="/cat">Назад</a>
      <h1>Category</h1>
      <h3>Name: {userName}</h3>
    </>
    )
}

export default CategoryDescription