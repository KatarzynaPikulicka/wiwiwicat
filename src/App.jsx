import "./App.css";
import "./index.css";
import { useState } from "react";
import { Play } from "lucide-react";

function SoundButton() {
  const [images, setImages] = useState([]);

  const playSound = () => {
    const audio = new Audio("/public/sound.mp3");
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
            src="/public/cat.png"
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
