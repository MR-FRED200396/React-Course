function List(data) {
    console.log(111111111111111111111);
    console.log(data);
    console.log(111111111111111111111);
    return (
        <div>
            <ul>
                {data.user.map(item => 
                    <li key={data.user}>
                        {item.passport}
                        {item.name}
                        {item.age}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default List;
