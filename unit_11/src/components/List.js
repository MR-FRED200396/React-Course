function List(data) {
    return (
        <div>
            <ul>
                {data.user.map((item) => (
                    <li key={data.user}>
                        {item.passport}
                        {item.name}
                        {item.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
