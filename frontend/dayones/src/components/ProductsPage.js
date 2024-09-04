import React, { useState } from "react";
import "./ProductsPage.css";
import ProductsNavbar from "./ProductsNavbar";
import OfferBanner from "./OfferBanner";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";

const ProductsPage = () => {
  const [showMyProducts, setShowMyProducts] = useState(false);

  return (
    <div className="products-page">
      <ProductsNavbar />
      <div className="products-content">
        <section className="product-controls">
          <div className="container">
            <div className="toggle-container">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={showMyProducts}
                  onChange={() => setShowMyProducts(!showMyProducts)}
                />
                <span className="slider round"></span>
              </label>
              <span>{showMyProducts ? "My Products" : "Products"}</span>
            </div>
            <button className="btn-list-product">List Product</button>
          </div>
        </section>

        <OfferBanner />

        <CategoryFilter />

        <section className="featured-products">
          <div className="container">
            <h2>Shop your favorite products</h2>
            <ProductList horizontal />
          </div>
        </section>

        <section className="interested-products">
          <div className="container">
            <h2>You might also be interested in</h2>
            <ProductList horizontal />
          </div>
        </section>

        <section className="all-products">
          <div className="container">
            <h2>All Products</h2>
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
