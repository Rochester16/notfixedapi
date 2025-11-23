import React, { useState, useEffect } from 'react';
// Assuming you have a file for utility/API calls, e.g., apiService.js

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState(new Set());

  // --- Data Fetching Placeholder ---
  useEffect(() => {
    // In a real app, this would be an API call:
    // apiService.fetchWishlist().then(data => { ... })
    const mockFetch = () => {
      setTimeout(() => {
        const mockData = [
          { id: 1, name: 'Elegant Couple Ring Set', price: 23500, image: 'ring-image-url.jpg', selected: true },
          { id: 2, name: 'Sapphire Drop Necklace', price: 35000, image: 'necklace-image-url.jpg', selected: false },
          { id: 3, name: 'Diamond Stud Earrings', price: 15000, image: 'earrings-image-url.jpg', selected: false },
        ];
        setWishlistItems(mockData);
        setLoading(false);
        // Initialize selectedIds based on mockData
        const initialSelected = new Set(mockData.filter(item => item.selected).map(item => item.id));
        setSelectedIds(initialSelected);
      }, 500);
    };
    mockFetch();
  }, []);

  // --- Interaction Handlers ---
  const handleRemove = async (id) => {
    // In a real app: await apiService.removeItem(id);
    setWishlistItems(items => items.filter(item => item.id !== id));
    setSelectedIds(ids => {
        const newIds = new Set(ids);
        newIds.delete(id);
        return newIds;
    });
  };

  const handleSelect = (id) => {
    setSelectedIds(ids => {
      const newIds = new Set(ids);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.size === 0) return;
    // In a real app: await apiService.deleteItems(Array.from(selectedIds));
    setWishlistItems(items => items.filter(item => !selectedIds.has(item.id)));
    setSelectedIds(new Set());
  };

  const handleClearWishlist = async () => {
    // In a real app: await apiService.clearWishlist();
    setWishlistItems([]);
    setSelectedIds(new Set());
  };

  if (loading) return <div className="page-content">Loading Wishlist...</div>;

  return (
    <div className="main-content">
      <div className="cart-section"> {/* Reusing cart-section for padding/centering */}
        <h2 className="page-title">MY WISHLIST ❤️</h2>
        
        {wishlistItems.length === 0 ? (
            <div className="empty-cart-message">Your wishlist is empty. Start shopping!</div>
        ) : (
          <div className="cart-table-container">
            <table className="cart-table"> {/* Reusing cart-table for styling */}
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(item.id)}
                        onChange={() => handleSelect(item.id)}
                      />
                    </td>
                    <td>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </td>
                    <td>₱ {item.price.toLocaleString()}</td>
                    <td>
                      <button
                        className="buy-btn" // Reusing buy-btn style for 'Remove' as seen in the image's style
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {wishlistItems.length > 0 && (
          <div className="wishlist-actions-bottom" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            {/* The CSS provided for Delete Selected/Clear Wishlist uses different button styles.
                I will map to the existing general button classes: */}
            <button 
              className="btn-warning" // Using a gold button style for "Delete Selected"
              onClick={handleDeleteSelected}
              disabled={selectedIds.size === 0}
            >
              Delete Selected
            </button>
            <button 
              className="btn-danger" // Using a themed danger/secondary button style for "Clear Wishlist"
              onClick={handleClearWishlist}
            >
              Clear Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;