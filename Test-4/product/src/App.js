import React from 'react';
import './product.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Product = ({ name, price, image, rating }) => {
  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
  };

  const handleMakeOffer = () => {
    console.log(`Making an offer for ${name}`);
  };

  return (
    <div className="product">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`fas fa-star ${i < Math.floor(rating) ? 'filled' : ''}`}
            ></i>
          ))}
        </div>
        <p>Price: ${price}</p>
        <div className="buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleMakeOffer}>Make Offer</button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      name: 'Nord Stage 3 88 Keys',
      price: '$5,738.00',
      image: 'https://i.ibb.co/RvYbWNp/Nord-Stage-3-overview.jpg alt="Nord-Stage-3-overview" border="0"',
      rating: 5,
    },
    {
      name: 'Line 6 Helix Rack Guitar Processor - 1x Opened Box',
      price: '$1,831.57',
      image: 'https://i.ibb.co/BGfXP4G/line-6-helix-rack-guitar-processor-1x-opened-box.jpg" alt="line-6-helix-rack-guitar-processor-1x-opened-box" border="0"',
      rating: 5,
    },
    {
      name: 'Nord Lead A1',
      price: '$1,700',
      image: 'https://i.ibb.co/9V52dxd/Nord-Lead-A1-large.jpg" alt="Nord-Lead-A1-large" border="0"',
      rating: 5,
    },
    {
      name: 'Moog Subsequent 37',
      price: '$1,700',
      image: 'https://i.ibb.co/Hx58cgr/Moog-Subsequent-37.jpg" alt="Moog-Subsequent-37" border="0"',
      rating: 5,
    },
    {
      name: 'Moog Minitaur 2010s Black',
      price: '$682.80',
      image: 'https://i.ibb.co/CHn66Gy/moog-minitaur-2010s-black.jpg" alt="moog-minitaur-2010s-black" border="0"',
      rating: 5,
    },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default App;
