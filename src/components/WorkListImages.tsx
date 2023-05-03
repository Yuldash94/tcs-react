import React from 'react'
import { Iimage } from '../App'
interface Props {
    images: Iimage[],
    sendImageToSlider: (url:string) => void,
    setImages: ([]) => void
}

export function WorkListImages({images, sendImageToSlider, setImages}:Props) {
    const dragImage = (e:any) => {
        e.dataTransfer.setData('url', e.target.src)
    }
    const onImageSelect = (e:any) => {
        console.log(e.target.files);
        const file = e.target.files[0]
        let newImage = {
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
                onChange={onImageSelect}
            ></input>
            <span>Выберите фотографию</span>
        </form>
        
        {images.map( item => (
            <img 
                key={item.id}
                src={item.url} alt=" " 
                onClick={() => sendImageToSlider(item.url)}
                onDragStart={dragImage}/>
        ))}
    </div>
  )
}
