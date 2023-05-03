import React, { useState } from 'react'
import { Iimage } from '../App';
import { ModalImage } from './ModalImage';

interface Props {
    images: Iimage[],
    sendImageToSlider: (url:string) => void

}
export function Slider({images, sendImageToSlider}:Props) {
    const [modalImage, setModalImage] = useState('')
    const openSlideImage = (url:string) => {
        setModalImage(url)
    }
    const closeSlideImage = () => {
        setModalImage('')
    }
    const [slide, setSlide] = useState(0)
    const changeSlide = (direction = 1) => {
        if (!images.length) {
            setSlide(0)
        }
        if (images.length > 0) {
            let slideNumber = 0;
    
            if (slide + direction < 0) {
              slideNumber = images.length - 1;
            } else {
              slideNumber = (slide + direction) % images.length;
            } 
            setSlide(slideNumber)
        } 
      }

      const imageDrop = (e:any) => {
        let url = e.dataTransfer.getData('url')
        sendImageToSlider(url)
      }
  return (
    <div className="slider">
        <div className="slider-carousel">
            <div className="slider--slides"
                style={{ transform: `translateX(-${slide * 100}%)` }}
                onDragOver={(e) => e.preventDefault()}
                onDrop={imageDrop}
            >   
                {images.length > 0 ? 
                images.map((item) => 
                     <img 
                        key={item.id} 
                        className="slide" 
                        src={item.url} 
                        alt=""
                        onClick={() => openSlideImage(item.url)}    
                    ></img>
                    )
                :
                <div className='slide--no-images-mesage'>
                    <h3>Выберите фотографию из блока ниже...</h3>
                </div>
                }
               
           </div>
        </div>
        <div className="slider--btns">
            <div 
                className="slider--btn"
                id="previous-slide"
                onClick={() => changeSlide(-1)}
            >&#60;</div>
            <p>Страница</p><p id="slide-number">{slide+1}</p>
            <div 
                className="slider--btn" 
                id="next-slide"
                onClick={() => changeSlide(1)}
            >&#62;</div>
        </div>
        {modalImage && <ModalImage  imageUrl={modalImage} closeSlideImage={closeSlideImage}/>}
    </div>
  )
}