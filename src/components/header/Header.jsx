import './header.css'

function Header() {
    return (
        <header className='container'>
            <div className="left">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6BGhj2_dqApdaLKCa-8uD62wTGtxJp1tkQ&s" alt="" />
                </div>
                <a className='a-active' href="https://dodopizza.kg/bishkek#wxgwy">Завтраки</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#zrmzo">Пицца</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#xqhej">Комбо</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#ancfo">Закуски</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#pcexx">Десерты</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#qlguj">Кофе</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#gcydj">Напитки</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#qqzxt">Соусы</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek#xnbrz">Другие товары</a>
                <a className='a-active' href="https://dodopizza.kg/bishkek/bonusactions">Акции</a>
            </div>
            <div className="right">
                <button className='btn'>Корзина</button>
            </div>
        </header>
    )
}

export default Header;