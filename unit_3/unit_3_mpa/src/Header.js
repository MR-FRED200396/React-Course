function Header(props){
    let mainNav = props.data.mainNav.map((item)=> (
        <li key={item.category}>
            <a href={item.link}>{item.category}</a>
        </li>
    ))
    return(
        <nav>
            <ul>{mainNav}</ul>
        </nav>
    )
}

export default Header
