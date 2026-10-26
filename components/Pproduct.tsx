"use client";

import React, { useEffect, useState } from "react";

const Pproduct = () => {
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [category, setCategory] = useState("All");

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [product, setProduct] = useState(null);

  // گرفتن همه محصولات
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(async (data) => {
        const body = await data.json();

        setProducts(body);
        setLoading(false);
      })
      .catch(() => {
        setError("خطا در دریافت محصولات");
        setLoading(false);
      });
  }, []);

  // گرفتن جزئیات محصول انتخاب شده
  useEffect(() => {
    if (selectedProductId) {
      fetch(`https://fakestoreapi.com/products/${selectedProductId}`)
        .then(async (data) => {
          const body = await data.json();

          setProduct(body);
        });
    }
  }, [selectedProductId]);

  // فیلتر کردن محصولات بر اساس دسته بندی
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="flex flex-col gap-4 p-4">

      <h1 className="text-2xl font-bold">
        Products
      </h1>

      {/* انتخاب دسته بندی */}
      <select
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
        className="border p-2 rounded-lg"
      >
        <option value="All">All</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      {/* Loading */}
      {loading && (
        <h2>
          Loading...
        </h2>
      )}

      {/* Error */}
      {error && (
        <h2 className="text-red-500">
          {error}
        </h2>
      )}

      {/* محصولات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              setSelectedProductId(product.id);
            }}
            className="border rounded-xl p-4 cursor-pointer"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
            />

            <h2 className="font-bold mt-3">
              {product.title}
            </h2>

            <p className="mt-2">
              Price: ${product.price}
            </p>

            <p className="text-sm opacity-60">
              {product.category}
            </p>

            <p className="mt-2">
              ⭐ {product.rating.rate}
            </p>

          </div>
        ))}

      </div>

      {/* جزئیات محصول انتخاب شده */}
      {product && (
        <div className="border-2 border-green-400 rounded-xl p-4 mt-4">

          <h2 className="text-xl font-bold mb-3">
            Product Details
          </h2>

          <img
            src={product.image}
            alt={product.title}
            className="w-48 h-48 object-contain"
          />

          <h3 className="font-bold mt-3">
            {product.title}
          </h3>

          <p>
            Price: ${product.price}
          </p>

          <p>
            Category: {product.category}
          </p>

          <p>
            Rating: ⭐ {product.rating.rate}
          </p>

          <p className="mt-3">
            {product.description}
          </p>

        </div>
      )}

    </div>
  );
};

export default Pproduct;