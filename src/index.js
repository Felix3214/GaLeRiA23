import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const categories = {
  ferrari: [
    '/images/f1.jpg',
    '/images/f2.jpg',
    '/images/f3.jpg',
  ],
  lamborghini: [
    '/images/l1.jpg',
    '/images/l2.jpg',
    '/images/l3.jpg',
  ],
  bmw: [
    '/images/b1.jpg',
    '/images/b2.jpg',
    '/images/b3.jpg',
  ],
};

function Car({ src, onClick }) {
  return (
    <img
      src={src}
      alt="Car"
      onClick={() => onClick(src)}
      style={{
        width: '100px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgb(0, 0, 0)',
        cursor: 'pointer',
      }}
    />
  );
}

function Modal({ src, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt="Powiększone"
        style={{
          width: '300px',
          height: '500px',
          borderRadius: '8px',
        }}
      />
    </div>
  );
}

function Garage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1>autka:</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelectedCategory('ferrari')}>Ferrari</button>
        <button onClick={() => setSelectedCategory('lamborghini')}>Lamborghini</button>
        <button onClick={() => setSelectedCategory('bmw')}>BMW</button>
      </div>

      {selectedCategory && (
        <div>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {categories[selectedCategory].map((src, index) => (
              <Car key={index} src={src} onClick={handleImageClick} />
            ))}
          </div>
        </div>
      )}

      {selectedImage && <Modal src={selectedImage} onClose={handleModalClose} />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

reportWebVitals();
