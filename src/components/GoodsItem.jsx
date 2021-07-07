function GoodsItem({id, title, description, img, price, addToBasket = () => {}}) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt={title} />
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBasket({
                            id,
                            title,
                            price
                        })
                }
                >
                    Купить
                </button>
                <span className="right" style={{fontSize: '1.6rem'}}>{price}$</span>
            </div>
        </div>
);
}

export {GoodsItem}


