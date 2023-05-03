import React, { useState } from 'react'
import { TbArrowsMaximize } from 'react-icons/tb'
import { MdDeleteForever } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { TiArrowMinimise } from 'react-icons/ti'
import { WorkListImages } from './WorkListImages'

interface IWorkList {
    id: number,
    title: string,
    isActive: boolean,
}
interface Props {
    sendImageToSlider: (url: string) => void,
    deleteAllImages: () => void
}
export function WorkList({sendImageToSlider, deleteAllImages}:Props) {
    const [workList, setWorkList] = useState<IWorkList[]>([
        {
            id: 1,
            title: 'Галерея',
            isActive: true
        },
        {
            id: 2,
            title: 'Шаблоны',
            isActive: false
        },
        {
            id: 3,
            title: 'Фон',
            isActive: false
        },
    ])
    const [listActive, setListActive] = useState<number>(1)
    const [expand, setExpand] = useState<boolean>(false)
    const navItemClick = (id:number) => {
        setWorkList(
            workList.map( item => {
                if (item.id !== id) {
                    item.isActive = false
                }
                if (item.id === id) {
                    item.isActive = true
                    setListActive(id)
                }
                return item
            })
        )
    }
    const [galleryImages, setGalleryImages] = useState([
        {
            id: 1,
            url: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg'
        },
        {
            id: 2,
            url: 'https://media.proglib.io/wp-uploads/2018/03/EzgdmaCQuT84bgDL4fhXZS.jpg'
        },
        {
            id: 3,
            url: 'https://cdn2.hexlet.io/derivations/image/fill_png/1200/565/eyJpZCI6IjRhYTgzNGM3NzQxZmU0MDQ1YWUzZTVlY2Y2MTc5NjU0LnBuZyIsInN0b3JhZ2UiOiJzdG9yZSJ9?signature=ebff15166605853f0470969c43f36e9acb18d92111fc9ddeed6a4e07e73dd52a'
        },
        {
            id: 4,
            url: 'https://learn.microsoft.com/training/achievements/create-nodejs-project-dependencies-social.png'
        },
      ])
      const [sampleImages, setSampleImages] = useState([
        {
            id: 1,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk47R-7FhLi7uBSnIvWuXxdptZDJq8H5K-g&usqp=CAU'
        },
        {
            id: 2,
            url: 'https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg'
        },
        {
            id: 3,
            url: 'https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png'
        },
        {
            id: 4,
            url: 'https://learn.microsoft.com/training/achievements/create-nodejs-project-dependencies-social.png'
        },
      ])
      const [backgroundImages, setBackgroundImages] = useState([
        {
            id: 1,
            url: 'https://learn.microsoft.com/training/achievements/create-nodejs-project-dependencies-social.png'
        },
        {
            id: 2,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IctIi-0hkj_Tuevzb-t3tu240O2re5Tsrg&usqp=CAU'
        },
        {
            id: 3,
            url: 'https://xakep.ru/wp-content/uploads/2018/08/180618/js-h.jpg'
        },
        {
            id: 4,
            url: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305183140/Javascript.jpg'
        },
      ])
      const expandImages = () => {
        setExpand(!expand)
      }
  return (
    <div className={!expand ? "work-list" : "work-list work-list--expand" }>
        <nav>
            {workList.map(item => (
                <div 
                    key={item.id} 
                    className={!item.isActive ? "nav-item" : "nav-item nav-item--active"} 
                    onClick={() => navItemClick(item.id)}
                >
                    {item.title}
                </div>
            ))}
        </nav>
        <div className="work-list--table">
            <div>
                <div 
                    className="table-item clear"
                    onClick={deleteAllImages}    
                >
                    <RxCross2/>
                     Очистить</div>
                <div className="table-item choose">
                    <MdDeleteForever/>
                    Выбрать</div>
            </div>
            {!expand ?
                <div className="expand" 
                    onClick={expandImages}
                >
                    <TbArrowsMaximize/>
                    Развернуть
                </div>
            :
                <div className="expand" 
                    onClick={expandImages}
                >
                    <TiArrowMinimise/>
                    Свернуть
                </div>
            }
        </div>
        {listActive === 1 ?
            <WorkListImages images={galleryImages} setImages={setGalleryImages} sendImageToSlider={sendImageToSlider}/>
        : listActive === 2 ?
            <WorkListImages images={sampleImages} setImages={setSampleImages} sendImageToSlider={sendImageToSlider}/>
        : listActive === 3 ?
            <WorkListImages images={backgroundImages} setImages={setBackgroundImages} sendImageToSlider={sendImageToSlider}/>
        : null
        }
    </div>
  )
}
