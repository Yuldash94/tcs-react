import React, {useState} from 'react';
import { Header } from './components/Header'
import { Slider } from './components/Slider';
import { WorkList } from './components/WorkList';

export interface Iimage{
  id: number,
  url: string
}

function App() {
  const [images, setImages] = useState<Iimage[]>([
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
  const sendImageToSlider = (url:string) => {
    let img = {
      id: Math.random(),
      url: url
    }
    setImages([img, ...images])
  }
  const deleteAllImages = () => {
    setImages([])
    
  }
  return (  
    <div className="App">
      <Header />
      <Slider images={images} sendImageToSlider={sendImageToSlider}/>
      <WorkList sendImageToSlider={sendImageToSlider} deleteAllImages={deleteAllImages}/>    
    </div>
  );
}

export default App;
