function Header(){
    return (
        <nav className="light-green darken-1">
            <div className="nav-wrapper">
                <img className="nav-logo" width={50} height={50} src="/img/mainlogo.svg" alt="logo"/>
                <a href="#" className="brand-logo">Fruit Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="!#">Repo</a></li>
                    <li><a href="!#">Cart</a></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}