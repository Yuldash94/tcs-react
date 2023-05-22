import React, { useState, useRef } from 'react';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Iimage } from '../App';
import { MdOutlineRotate90DegreesCw, MdOutlineRotate90DegreesCcw, MdCheck, MdFilter, MdClose } from 'react-icons/md'

interface Props {
  image: Iimage,
  handleCloseSlideImage: (image: Iimage) => void,
  sendImageToSlider: (url: string, slide: number, change: boolean, filter: string, changeId?: number) => void,
  slide: number
}

export function ModalImage({ image, handleCloseSlideImage, sendImageToSlider, slide }: Props) {
  const [imageFilter, setImageFilter] = useState(image.filter)
  const cropperRef = useRef<ReactCropperElement>(null)

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const cropper = cropperRef.current?.cropper
      sendImageToSlider(cropper.getCroppedCanvas().toDataURL(), slide, true, imageFilter, image.id)
    }
  }
  const handleRotateImage = (deg: number) => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const cropper = cropperRef.current?.cropper
      cropper.rotate(deg)
    }
  }
  const handleApplyImageChanges = () => {
    getCropData()
    handleCloseSlideImage({ id: 0, url: '', editedUrl: '', filter: 'none' })
  }
  const handleFilterClicks = () => {
    imageFilter === 'none' ? setImageFilter('grayscale(100%)') : setImageFilter('none')
  }

  return (
    <div className="modal--wrapper" >
      <div className='modal-image--controls-btn close-modal-image'>
        <div
          className='modal-image--controls-btn-icon'
          onClick={() => handleCloseSlideImage({ id: 0, url: '', editedUrl: '', filter: 'none' })}
        >
          <MdClose />
        </div>
      </div>
      <div className="modal-image">
        <Cropper
          ref={cropperRef}
          style={{ height: 400, width: '100%', filter: imageFilter }}
          zoomTo={0.5}
          initialAspectRatio={16 / 9}
          src={image.url}
          viewMode={1}
          minCropBoxHeight={70}
          minCropBoxWidth={90}
          background={false}
          responsive={false}
          cropBoxResizable={false}
          cropBoxMovable={false}
          autoCropArea={1}
          guides={true}
          dragMode={'move'}
          toggleDragModeOnDblclick={false}
        />
      </div>
      <div className="modal-image--controls">
        <div className='modal-image--controls-btn'>
          <div
            className='modal-image--controls-btn-icon'
            onClick={() => handleRotateImage(-90)}
          >
            <MdOutlineRotate90DegreesCcw />
          </div>
          <p>Повернуть влево</p>
        </div>
        <div className='modal-image--controls-btn'>
          <div
            className='modal-image--controls-btn-icon'
            onClick={() => handleRotateImage(90)}
          >
            <MdOutlineRotate90DegreesCw />
          </div>
          <p>Повернуть вправо</p>
        </div>
        <div className='modal-image--controls-btn'>
          <div
            className='modal-image--controls-btn-icon'
            onClick={handleFilterClicks}
          >
            <MdFilter />
          </div>
          <p>Ч/б фильтр</p>
        </div>
        <div className='modal-image--controls-btn'>
          <div
            className='modal-image--controls-btn-icon'
            onClick={handleApplyImageChanges}
          >
            <MdCheck />
          </div>
          <p>Применить</p>
        </div>
      </div>
    </div>
  )
}
