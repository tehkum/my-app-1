import './App.css';
import images from "./images"; 
import image2 from "./image2"; 
import ImageSlider from "./ImageSlider"; 
import Button from "./button";
  
const App = () => { 
  return ( 
    <div className="App"> 
    <ImageSlider images={images}/> 
    <br />
    <ImageSlider 
      images={image2}/>
    <br />
    <Button />
  </div> 
  ) 
} 

export default App;
 