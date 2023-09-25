import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import './Designcss.css';
import { ReactComponent as StarIcon } from './star.svg';

const TShirtDesigner = () => {
  const canvasRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Initial color: white

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (!canvasElement) {
      console.error("Canvas element is not available.");
      return;
    }

    const canvas = new fabric.Canvas(canvasElement, {
      width: 400,
      height: 500,
    });

    // Create a T-shirt shape
    const tShirt = new fabric.Rect({
      width: 300,
      height: 400,
      fill: selectedColor,
      selectable: false,
    });
    

    canvas.add(tShirt);

    // Create color picker
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = selectedColor;
    colorPicker.addEventListener('input', (e) => {
      const newColor = e.target.value;
      setSelectedColor(newColor);
      tShirt.set('fill', newColor);
      canvas.renderAll();
    });

    // Add color picker to the DOM
    document.getElementById('color-picker-container').appendChild(colorPicker);

    // Add sample shapes (e.g., a star) as design elements
    const star = new fabric.Path(StarIcon, {
      left: 150,
      top: 250,
      fill: 'red',
      width: 50,
      height: 50,
    });

    canvas.add(star);

    return () => {
      canvas.dispose();
    };
  }, [selectedColor]);

  return (
    <div className="t-shirt-designer">
      <h1>T-Shirt Designer</h1>
      <div id="color-picker-container">
        <label htmlFor="color-picker">Choose T-shirt color:</label>
      </div>
      <div className="canvas-container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default TShirtDesigner;
