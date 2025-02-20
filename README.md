# 🐱🎶 Wiwiwi Cat Sound & Image Animation 

This is a fun React app that plays a sound  and generates falling cat images  with random positions and rotations when you click a button. 

## 🚀 Features

-  Plays a sound when the button is clicked.
-  Displays 25 randomly positioned and rotating cat images that fall down.
-  Cat images disappear after a short duration (4 seconds).

## 🛠️ Getting Started

To get started with the project, follow these steps:

### 📌 Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your machine. This will allow you to run the project locally. 🖥️

### 📥 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/wiwiwicat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd wiwiwicat
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000)  in your browser to see the app in action! 

## 📂 Code Overview

### `📜 App.js`

- This file contains the main app structure. It includes a button that plays a sound 🎵 and generates falling cat images with random positions.

### `🎛️ SoundButton.js`

- This component handles the button click event, plays the sound 🔊, and triggers the animation of images falling. 

### 🎨 `App.css` & `index.css`

- These are the style files that provide the look and feel of the app, including button styles and animations. 

### 🎯 Key Features:

1. **Sound Play:** When the button is clicked, the sound from `public/sound.mp3` is played.
2. **Image Animation:** 25 cat images are displayed and animated with random positions, rotations, and movements.
3. **CSS Animations:** The images fall with an animation using keyframes, giving them a smooth transition effect. 

### 📌 Important Files:

- 🎵 `public/sound.mp3`: The audio file that plays when the button is clicked.
- 🐱 `public/cat.png`: The image of a cat that falls with each button click.

## 💻 Technologies Used

- **React**: JavaScript library for building the user interface.
- **CSS Animations**: Used to animate the falling images.
- **Lucide Icons**: Used for the play button icon.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 

---

Enjoy playing with the sound and the falling cats! 🐱🎶

