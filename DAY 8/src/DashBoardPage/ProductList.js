import React, { useState } from 'react';
import './ProductListcss.css'; // Add your CSS file here
import { Link } from 'react-router-dom';
import Footer from './Footer';
import expresst from '../images/expresst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const initialProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: '$25.99',
    features: 'Feature 1, Feature 2, Feature 3',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3vwKZNNWxnvzYnTzhE7wouwiQ4eg_3TL0w&usqp=CAU',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNLgYVS2p7R1Kfi2KyaBiMLrfCvJQIPBfsBsK3Dv7zlh_8vsNjvuMSLrjQla1hXinSzc&usqp=CAU',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://m.media-amazon.com/images/I/B1qmQK-r4OS._AC_CLa%7C2140%2C2000%7C91BxvPG-tjL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY1000_.png',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://m.media-amazon.com/images/I/71eOP2uYPFL._AC_SY350_QL65_.jpg',
  },{
    id: 5,
    name: 'Product 5',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://res.cloudinary.com/teepublic/image/private/s--kaWO0t7N--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829017:production:blanks:qe3008lhp5hquxmwp4a0,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1617862128/production/designs/20929723_0.jpg',
  },{
    id: 6,
    name: 'Product 6',
    price: '$19.99',
    features: 'Feature 1, Feature 2',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32Fao5fdA3FGDeJLXvkAWQMxrUyaJneM2nn9-kiCubf12ge9FXCLbGdEtGsQk7mi0TwY&usqp=CAU',
  },
];

function ProductList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to add a new product
  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'New Product',
      price: '$0.00',
      features: 'Feature 1, Feature 2',
      imageSrc: 'https://placeholder.com/200x200', // Replace with your default image URL
    };
    setProducts([...products, newProduct]);
  };

  // Function to delete a product by id
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Function to handle editing a product
  const editProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  // Function to handle saving edited product
  const saveEditedProduct = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  return (
    <div className='productuh'>

 
    <div className="transparent-container">
      <div className="container">
        <h1 className="title">Product List</h1>
        <nav className="navbar4">
        <ul>
          <div className="logo-container">
            <img src={expresst} alt="Your Logo" />
          </div>
         <p>PRODUCT LIST</p>
          <li>
        <Link to="/home"><FontAwesomeIcon icon={faHome} /> {/* Home icon */}
            </Link>
          </li>
          <li>
          <Link to="/about"> <FontAwesomeIcon icon={faInfoCircle} /> {/* About Us icon */}
            </Link>
          </li>
         
          <li><Link to="/">Logout</Link></li>
          {/* Add more links or content as needed */}
        </ul>
        </nav>

        <aside className={`sidebar00 ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon
              icon={faBars}
              className={`toggle-icon ${sidebarOpen ? 'open' : ''}`}
            />
          </div>
          <ul>
            <li>
              <Link to="/dash" className="disline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/order" className="disline">
                Order History
              </Link>
            </li>
            <li>
              <Link to="/productlist" className="disline">
                Product Lists
              </Link>
            </li>
            <li>
              <Link to="/admin" className="disline">
                Admin Details
              </Link>
            </li>
          </ul>
        </aside>

        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imageSrc} alt={product.name} />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-features">{product.features}</p>
              <button className="delete-button" onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
              <button className="edit-button" onClick={() => editProduct(product.id)}>
                Edit
              </button>
            </div>
          ))}
        </div>
        <button className="add-button" onClick={addProduct}>
          Add Product
        </button>
      </div>
      {editingProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Product</h2>
            <label>Name:</label>
            <input
              type="text"
              value={editingProduct.name}
              onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            />
            <label>Price:</label>
            <input
              type="text"
              value={editingProduct.price}
              onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
            />
            <label>Features:</label>
            <input
              type="text"
              value={editingProduct.features}
              onChange={(e) => setEditingProduct({ ...editingProduct, features: e.target.value })}
            />
            <label>Image URL:</label> {/* Add an input field for the image URL */}
            <input
              type="text"
              value={editingProduct.imageSrc}
              onChange={(e) => setEditingProduct({ ...editingProduct, imageSrc: e.target.value })}
            />
            <button className='save-button' onClick={() => saveEditedProduct(editingProduct)}>Save</button>
            <button  className='cancel-button' onClick={() => setEditingProduct(null)}>Cancel</button>
          </div>
        </div>
      )}
         </div>
      <Footer/>
    </div>
  );
}

export default ProductList;
