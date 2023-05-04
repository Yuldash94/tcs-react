import React, { useState } from 'react'
import { TbArrowsMaximize } from 'react-icons/tb'
import { MdDeleteForever } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { TiArrowMinimise } from 'react-icons/ti'
import { WorkListImages } from './WorkListImages'
import { backgrounImagesList, galleryImagesList, sampleImagesList, workListLinks } from '../data/data'
import { Link, Route, Routes } from 'react-router-dom'

interface IWorkList {
    id: number,
    title: string,
    link: string,
    isActive: boolean,
}
interface Props {
    sendImageToSlider: (url: string) => void,
    handleDeleteAllImages: () => void
}
export function WorkList({sendImageToSlider, handleDeleteAllImages}:Props) {
    const [workList, setWorkList] = useState<IWorkList[]>(workListLinks)
    const [expand, setExpand] = useState<boolean>(false)
    const [galleryImages, setGalleryImages] = useState(galleryImagesList)
    const [sampleImages, setSampleImages] = useState(sampleImagesList)
    const [backgroundImages, setBackgroundImages] = useState(backgrounImagesList)
    
    const navItemClick = (id:number) => {
        setWorkList(
            workList.map( item => {
                if (item.id !== id) {
                    item.isActive = false
                }
                if (item.id === id) {
                    item.isActive = true
                }
                return item
            })
        )
    }
    
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
                    <Link to={item.link}>
                        {item.title}
                    </Link>
                </div>
            ))}
        </nav>
        <div className="work-list--table">
            <div>
                <div 
                    className="table-item clear"
                    onClick={handleDeleteAllImages}    
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
        <Routes>
            <Route path='/tcs-react' element={<WorkListImages images={galleryImages} setImages={setGalleryImages} sendImageToSlider={sendImageToSlider}/>}/>
            <Route path='/tcs-react/sample' element={<WorkListImages images={sampleImages} setImages={setSampleImages} sendImageToSlider={sendImageToSlider}/>}/>
            <Route path='/tcs-react/background' element={<WorkListImages images={backgroundImages} setImages={setBackgroundImages} sendImageToSlider={sendImageToSlider}/>}/>
        </Routes>
    </div>
  )
}
