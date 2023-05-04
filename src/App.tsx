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
  const sendImageToSlider = (url: string) => {
    let img = {
      id: Math.random(),
      url: url
    }
    setImages([img, ...images])
  }
  const handleDeleteAllImages = () => {
    setImages([])
  }
  return (
    <div className="App">
      <Header />
      <Slider images={images} sendImageToSlider={sendImageToSlider} />
      <WorkList sendImageToSlider={sendImageToSlider} handleDeleteAllImages={handleDeleteAllImages} />
    </div>
  );
}

export default App;
