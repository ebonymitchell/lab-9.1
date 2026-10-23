
import { useState } from "react";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types";
import "./App.css";

// Sample user information.
const user: User = {
  id: "1",
  name: "Jordan Smith",
  email: "jordan.smith@example.com",
  role: "Software Engineer",
};

// Sample product information.
const product: Product = {
  id: "101",
  name: "Wireless Headphones",
  price: 199.99,
  description: "Wireless headphones with active noise cancellation.",
  inStock: true,
};

function App() {
  // Track whether the success alert is visible.
  const [showAlert, setShowAlert] = useState(false);

  // Store the IDs of products added to the cart.
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Handle the Add to Cart button.
  const handleAddToCart = (productId: string) => {
    setCartItems((previousItems) => [...previousItems, productId]);
    setShowAlert(true);
  };

  // Handle the Edit Profile button.
  const handleEdit = (userId: string) => {
    window.alert(`Editing user ${userId}`);
  };

  return (
    <main className="app">
      <header className="app-header">
        <h1>Component Library</h1>
        <p>Reusable React components built with TypeScript.</p>
      </header>

      {/* Show the success alert when a product is added. */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart successfully!"
          onClose={() => setShowAlert(false)}
        >
          <p>Your cart has been updated.</p>
        </AlertBox>
      )}

      <div className="component-grid">
        {/* Display the user profile. */}
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={handleEdit}
        >
          <p>Account status: Active</p>
        </UserProfileCard>

        {/* Display the product. */}
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <p>Free shipping available!</p>
        </ProductDisplay>
      </div>

      <p className="cart-count">Items in cart: {cartItems.length}</p>
    </main>
  );
}

export default App;
