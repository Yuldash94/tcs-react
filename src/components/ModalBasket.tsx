import React from 'react'

export function ModalBasket({setToCart}:any) {
  const modalClose = () => {
    setToCart(false)
  }
  return (
    <div className="modal--wrapper">
        <div className="modal">
            <div className="modal--close-btn"
              onClick={modalClose}
            >X</div>
            <h3>Продукт успешно добавлен в корзину!</h3>
            <div className="modal--go-cart-btn"
            onClick={()=> {
              alert('Вы переходите в корзинцу...')
              modalClose()
            }}
            >Перейти в корзину</div>
        </div>
    </div>
  )
}

