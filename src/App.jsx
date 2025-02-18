import "./App.css";
import "./index.css";
import { useState } from "react";
import { Play } from "lucide-react";
import mySound from "./assets/sound.mp3";
import myCat from "./assets/cat.png";

function SoundButton() {
  const [images, setImages] = useState([]);

  const playSound = () => {
    const audio = new Audio(mySound);
    audio.currentTime = 0;
    audio.play().catch((error) => console.error("Błąd odtwarzania:", error));

    const newImages = [];
    for (let i = 0; i < 25; i++) {
      const randomX = Math.random() * 300 - 150;
      const randomY = Math.random() * -300 - 50;
      const randomRotate = Math.random() * 360;

      newImages.push({
        id: i,
        x: randomX,
        y: randomY,
        rotate: randomRotate,
      });
    }

    setImages(newImages);
    setTimeout(() => setImages([]), 4000);
  };

  return (
    <div className="container">
      <button onClick={playSound} className="sound-button">
        <Play size={72} />
      </button>
      <div className="images-container">
        {images.map((img) => (
          <img
            key={img.id}
            src={myCat}
            alt="Obrazek"
            className="image-fall"
            style={{
              "--x": `${img.x}px`,
              "--y": `${img.y}px`,
              "--rotate": `${img.rotate}deg`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <SoundButton />
    </div>
  );
}

export default App;
