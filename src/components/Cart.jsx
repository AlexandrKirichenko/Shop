function Cart({quantity = 0, handleBasketShow = () => {}}) {
    return (
        <div className='cart blue accent-1 white-text' onClick={handleBasketShow}>
            <i className='material-icons'>local_grocery_store</i>
            { quantity ? <span className='cart-quantity'>{quantity}</span> : null }
        </div>
    )
}

export { Cart }