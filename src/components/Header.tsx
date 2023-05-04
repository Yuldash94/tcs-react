import React, { useState } from 'react'
import { GiOpenBook } from 'react-icons/gi'
import { ModalBasket } from './ModalBasket'

export function Header() {
    const [toCart, setToCart] = useState(false)

    const handleToCartModalOpen = () => {
        setToCart(!toCart)
    }

    return (
        <>
            <header>
                <div className="header--left">
                    <h2>Мой проект</h2>
                    <p>Размер: 400х280 мм (В развороте)</p>
                </div>
                <div className="header--right">
                    <div className="to-cart-btn"
                        onClick={handleToCartModalOpen}>
                        В корзину
                    </div>
                    <div className="menu">
                        <div className="menu--dot"></div>
                        <div className="menu--dot"></div>
                        <div className="menu--dot"></div>
                    </div>
                </div>
            </header>
            <div className="view-change">
                <GiOpenBook />
            </div>
            {toCart ? <ModalBasket handleToCartModaClose={handleToCartModalOpen} /> : null}
        </>
    )
}

