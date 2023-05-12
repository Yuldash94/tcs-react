import React, { useState } from 'react';
import { Header } from './components/Header'
import { Slider } from './components/Slider';
import { WorkList } from './components/WorkList';
import { sliderImagesList } from './data/data';

export interface Iimage {
  id: number,
  url: string
}

function App() {
  const [images, setImages] = useState<Iimage[]>(sliderImagesList)
  const [slide, setSlide] = useState(0)
  const sendImageToSlider = (url: string, slide: number ) => {
    let img = {
      id: Math.random(),
      url: url
    }
    setImages([
      ...images.slice(0, slide),
      img,
      ...images.slice(slide)
    ])
  }
  const handleDeleteAllImages = () => {
    setImages([])
  }
  return (
    <div className="App">
      <Header />
      <Slider images={images} sendImageToSlider={sendImageToSlider} slide={slide} setSlide={setSlide} />
      <WorkList sendImageToSlider={sendImageToSlider} handleDeleteAllImages={handleDeleteAllImages} slide={slide} />
    </div>
  );
}

export default App;
