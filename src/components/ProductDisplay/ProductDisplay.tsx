
import type { ProductDisplayProps } from "../../../types";

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <article className="product-card">
      {/* Display the product image if one is provided. */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      )}

      {/* Display the product name and formatted price. */}
      <h2>{product.name}</h2>

      <p className="product-price">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      {/* Display the description when enabled. */}
      {showDescription && <p>{product.description}</p>}

      {/* Display whether the product is in stock. */}
      {showStockStatus && (
        <p className={product.inStock ? "in-stock" : "out-of-stock"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Display the button only if a callback is provided. */}
      {onAddToCart && (
        <button
          type="button"
          onClick={() => onAddToCart(product.id)}
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      )}

      {/* Render additional content passed by the parent. */}
      {children}
    </article>
  );
}
