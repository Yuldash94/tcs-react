import React from 'react'

interface Props {
  handleToCartModaClose: () => void
}
export function ModalBasket({ handleToCartModaClose }: Props) {

  return (
    <div className="modal--wrapper modal--wrapper-basket">
      <div className="modal">
        <div className="modal--close-btn"
          onClick={handleToCartModaClose}
        >X</div>
        <h3>Продукт успешно добавлен в корзину!</h3>
        <div className="modal--go-cart-btn"
          onClick={() => {
            alert('Вы переходите в корзинцу...')
            handleToCartModaClose()
          }}
        >Перейти в корзину</div>
      </div>
    </div>
  )
}

