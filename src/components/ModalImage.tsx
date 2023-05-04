import React from 'react'
interface Props {
  imageUrl: string,
  handleCloseSlideImage: (url: string) => void
}
export function ModalImage({ imageUrl, handleCloseSlideImage }: Props) {
  return (
    <div className="modal--wrapper"
      onClick={() => handleCloseSlideImage('')}
    >
      <div className="modal-image">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  )
}
