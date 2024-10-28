import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios';
import './style.css';
import { AuthContext } from "../../ContextWrapper";

interface Product {
    title: string;
    price: string;
    link: string;
    website: string;
    img_link: string;
}

const SearchProducts: React.FC = () => {
    const { userData, setUserData } = useContext(AuthContext);
  
    const [product, setProduct] = useState('');
    const [currency, setCurrency] = useState('USD($)');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [results, setResults] = useState<Product[]>([]);
    const [error, setError] = useState('');
    const [wishlist,setWishlist] = useState<Product[]>([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/search`, {
                params: {
                    item_name: product,
                    min_price: minPrice,
                    max_price: maxPrice,
                    currency
                }
            });

            if (response.data && response.data.length > 0) {
                setResults(response.data);
                setError('');
            } else {
                setResults([]);
                setError('No similar products found.');
            }
        } catch (error) {
            setError('Failed to fetch results. Please try again.');
            console.error('Error fetching search results:', error);
        }
    };

    //Adding the selected items into the wishlist
    const addToWishlist = async (item: Product) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/api/wishlist`, item);
            if (response.status === 200) {
                setWishlist([...wishlist, item]);
                alert("Item added to wishlist successfully!");
            }
        } catch (error) {
            console.error('Error adding item to wishlist:', error);
            alert("Failed to add item to wishlist.");
        }
    };

    return (
        <div className="search-container">
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Enter product name"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                />
                <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
                    <option value="USD($)">USD($)</option>
                    <option value="EUR(€)">EUR(€)</option>
                    <option value="JPY(¥)">JPY(¥)</option>
                    <option value="INR(₹)">INR(₹)</option>
                    <option value="GBP(£)">GBP(£)</option>
                    <option value="AUD($)">AUD($)</option>
                    <option value="CAD($)">CAD($)</option>
                </select>
                <input
                    type="number"
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {error && <div className="error">{error}</div>}

            {results.length > 0 && (
                <div className="results">
                    <h2>Product List</h2>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>
                                <img src={result.img_link} alt={result.title} width="60" />
                                <div>
                                    <h3>{result.title}</h3>
                                    <p>Price: {result.price}</p>
                                    <a href={result.link} target="_blank" rel="noopener noreferrer">
                                        View Product
                                    </a>
                                    <br></br>
                                    <br></br>
                                    <button onClick={() => addToWishlist(result)}>Add to Wishlist</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchProducts;
