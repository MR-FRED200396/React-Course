import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Goods from '../component/Goods';
import { selectGoods } from '../store/goodsSlice';
import { increment } from '../store/cartSlice';

function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(increment(t.getAttribute('data-key')));
    };

    return (
        <>
            <div className="goods-field" onClick={clickHandler}>
                {goods.map((item) => (
                    <Goods
                        title={item.title}
                        cost={item.cost}
                        image={item.image}
                        articul={item.articul}
                        key={item.articul}
                    />
                ))}
            </div>
        </>
    );
}

export default GoodsList;
