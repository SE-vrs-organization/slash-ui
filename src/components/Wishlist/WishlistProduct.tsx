import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

interface WishlistItem {
    id: number;
    title: string;
    price: string;
    link: string;
    website: string;
    img_link: string;
}

const Wishlist: React.FC = () => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
    const [error, setError] = useState('');

    const fetchWishlist = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/wishlist');
            if (response.data) {
                setWishlist(response.data);
                setError('');
            }
        } catch (error) {
            setError('Failed to fetch wishlist items. Please try again.');
            console.error('Error fetching wishlist:', error);
        }
    };

    const handleRemove = async (id: number) => {
        try {
            await axios.delete(`http://127.0.0.1:5000/api/wishlist/${id}`);
            // Update the state to remove the item from the list
            const updatedWishlist = wishlist.filter((_, i) => i !== id);
            setWishlist(updatedWishlist);
            setError('');
        } catch (error) {
            setError('Failed to remove item from wishlist. Please try again.');
            console.error('Error removing item:', error);
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, []);

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {error && <div className="error">{error}</div>}
            {wishlist.length > 0 ? (
                <ul>
                    {wishlist.map((item) => (
                        <li key={item.id}>
                            <img src={item.img_link} alt={item.title} width="60" />
                            <div>
                                <h3>{item.title}</h3>
                                <p>Price: {item.price}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    View Product
                                </a>
                                <br></br><br></br>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in the wishlist.</p>
            )}
        </div>
    );
};

export default Wishlist;
