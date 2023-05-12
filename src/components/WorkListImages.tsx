import React from 'react'
import { Iimage } from '../App'
interface Props {
    images: Iimage[],
    sendImageToSlider: (url:string, slide: number) => void,
    slide: number,
    setImages: ([]) => void
}

export function WorkListImages({images, sendImageToSlider, slide, setImages}:Props) {
    const handleDragImage = (e:any) => {
        e.dataTransfer.setData('url', e.target.src)
    }
    const handleImageSelect = (e:any) => {
        const file = e.target.files[0]
        let newImage: Iimage = {
            id: Math.random(),
            url: URL.createObjectURL(new Blob([file]))
        }
        setImages([...images, newImage])
    }
  return (
    <div className="work-list--wrapper"> 
        <form action="">
            <input 
                type="file" 
                name="image" 
                accept='image/*'
                onChange={handleImageSelect}
            ></input>
            <span>Выберите фотографию</span>
        </form>    
        {images.map( item => (
            <img 
                key={item.id}
                src={item.url} alt=" " 
                onClick={() => sendImageToSlider(item.url, slide)}
                onDragEnd={handleDragImage}/>
        ))}
    </div>
  )
}
