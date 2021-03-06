import {useContext} from 'react';
import {ShopContext} from '../context';
import {BasketItem} from './BasketItem'

function BasketList() {
    const {order = [], handleBasketShow = () => {}} = useContext(ShopContext)

    const totalPrice = order.reduce((sum,el) => {
        let discount = 0;
        if(el.quantity % 3 === 0 )  {discount = el.price*0.5 * (Math.floor(el.quantity/3))}
        return  sum + (el.price* el.quantity - discount);
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}/>
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">
                Общая стоимость(со скидкой):{totalPrice}$
            </li>
            <li className="collection-item">
                <button className="btn btn-small">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>)
}

export {BasketList}