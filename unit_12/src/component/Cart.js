import '../App.css';

function Cart(props) {
    return (
        <tr className="tableRow">
            <td>
                {props.title} <img src={props.image} alt="" />
            </td>
            <td>{props.cost}</td>
            <td>{props.quality}</td>
            <td>{props.cost * props.quality}</td>
            <td>
                <button className="minus-goods" data-key={props.articul}>
                    Minus Goods
                </button>
            </td>
            <td>
                <button className="delete-goods" data-key={props.articul}>
                    Delete Goods
                </button>
            </td>
        </tr>
    );
}

export default Cart;
