import React, { useState } from 'react'
import { Iimage } from '../App';
import { ModalImage } from './ModalImage';

interface Props {
    images: Iimage[],
    sendImageToSlider: (url: string, slide: number, change: boolean, filter?: string, changeId?: number) => void,
    setSlide: (slide: number) => void,
    slide: number
}
export function Slider({ images, sendImageToSlider, setSlide, slide }: Props) {
    const [modalImage, setModalImage] = useState<Iimage>()

    const handleOpenSlideImage = (image: Iimage) => {
        setModalImage(image)
    }

    const handleChangeSlide = (direction = 1) => {
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

    const handleImageDrop = (url: string) => {
        sendImageToSlider(url, slide, false)
    }

    return (
        <div className="slider">
            <div className="slider-carousel">
                <div className="slider--slides slide--animation"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleImageDrop(e.dataTransfer.getData('url'))}
                >
                    {images.length > 0 ?
                        images.map((item) =>
                            <img
                                key={item.id}
                                className="slide"
                                src={item.editedUrl}
                                style={{ filter: `${item.filter}` }}
                                alt=""
                                onClick={() => handleOpenSlideImage(item)}
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
                    onClick={() => handleChangeSlide(-1)}
                >&#60;</div>
                <p>Страница</p><p id="slide-number">{slide + 1}</p>
                <div
                    className="slider--btn"
                    id="next-slide"
                    onClick={() => handleChangeSlide(1)}
                >&#62;</div>
            </div>
            {modalImage?.url && <ModalImage image={modalImage} handleCloseSlideImage={handleOpenSlideImage} sendImageToSlider={sendImageToSlider} slide={slide} />}
        </div>
    )
}