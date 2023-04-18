import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import { selectCart } from '../store/cartSlice';
import Cart from '../component/Cart';
import { minusGoods, deleteGoods } from '../store/cartSlice';

function CartList() {
    const dispatch = useDispatch();

    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    const clickHandler = (event) => {
        event.preventDefault();
        const isMinusGoodsBtn = event.target.classList.contains('minus-goods');
        const isDeleteGoodsBtn =
            event.target.classList.contains('delete-goods');
        if (isMinusGoodsBtn) {
            dispatch(minusGoods(event.target.getAttribute('data-key')));
        }
        if (isDeleteGoodsBtn) {
            dispatch(deleteGoods(event.target.getAttribute('data-key')));
        }
    };

    const cartKeys = Object.keys(cart);
    const suma = cartKeys.reduce((accum, item) => {
        return (accum += goodsObj[item]['cost'] * cart[item]);
    }, 0);

    return (
        <>
            <table onClick={clickHandler}>
                <tr>
                    <th>Goods Name</th>
                    <th>Goods Price</th>
                    <th>Goods Quality</th>
                    <th>Total Price</th>
                    <th>Minus Goods</th>
                    <th>Delete Goods</th>
                </tr>
                {Object.entries(cart).map(([articul, quality]) => (
                    <Cart
                        articul={articul}
                        title={goodsObj[articul]['title']}
                        cost={goodsObj[articul]['cost']}
                        image={goodsObj[articul]['image']}
                        quality={quality}
                        key={articul}
                    />
                ))}
                <tr>
                    <th> Total to payment</th>
                    <th></th>
                    <th></th>
                    <th>{suma}</th>
                </tr>
            </table>
        </>
    );
}

export default CartList;
