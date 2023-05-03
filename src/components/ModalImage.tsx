import React from 'react'
interface Props {
  imageUrl: string,
  closeSlideImage: () => void
}
export function ModalImage({imageUrl, closeSlideImage}:Props) {
  return (
    <div className="modal--wrapper"
      onClick={(e) => {
        e.preventDefault()
        closeSlideImage()}}
    >
    <div className="modal-image">
        <img src={imageUrl} alt=""/>
    </div>
</div>
  )
}
