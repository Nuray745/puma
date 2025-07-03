import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductsByCategoryId,
  getProductsBySubId,
  getProductsByItemId,
  getAllCategories,
} from "../services/api"; // Import services
import Card from "../components/Card"; // Adjust the path if necessary

function ProdByCategory() {
  const { id } = useParams(); // Get dynamic 'id' from the URL
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(8);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // For error handling
  const [isTwoColumns, setIsTwoColumns] = useState(false); // State for grid layout
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      setError(null); // Reset error state before each fetch attempt

      try {
        // First, try fetching by categoryId
        let categoryData = await getProductsByCategoryId(id);
        if (categoryData?.length > 0) {
          setProducts(categoryData);
          setIsLoading(false);
          return;
        }

        // Second, if categoryData is not found, try fetching by subcategoryId
        let subData = await getProductsBySubId(id);
        if (subData?.length > 0) {
          setProducts(subData);
          setIsLoading(false);
          return;
        }

        // Finally, if no category or subcategory is found, try fetching by itemId
        let itemData = await getProductsByItemId(id);
        if (itemData?.length > 0) {
          setProducts(itemData);
          setIsLoading(false);
          return;
        }

        setProducts([]); // No products found
        setIsLoading(false);
      } catch (err) {
        setError("An error occurred while fetching products.");
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [id]); // Re-run the effect when 'id' changes (based on URL)

  useEffect(() => {
    async function fetchCategories() {
      setIsLoading(true); // Set loading true while fetching data
      setError(null); // Reset any previous error state

      try {
        const data = await getAllCategories(); // Fetch all categories
        const filteredCategory = data.filter(
          (category) => category.id === parseInt(id)
        ); // Filter data based on the `id`
        setCategories(filteredCategory); // Set the filtered data to the state
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError("An error occurred while fetching categories.");
        setIsLoading(false); // Set loading to false if an error occurs
      }
    }

    fetchCategories(); // Call the function to fetch data
  }, [id]); // Run this effect whenever `id` changes

  return (
    <div>
      <div className="border-b border-[#e5e7ea] py-8 px-8">
        <div>
          <div className="flex items-center gap-3 text-base text-[#191919]">
            <div className="font-bold">Home</div>
            <div className="w-1 h-1 mt-1 rounded-full bg-[#8C9198]"></div>

            {/* Display the category name */}
            <div className="font-semibold">
              {categories.length > 0
                ? categories.find((item) => item.id === parseInt(id))
                    ?.categoryName || "Category Name Not Available"
                : "Home"}
            </div>

            {/* Display the subcategory name if available */}
            {categories.length > 0 && (
              <div className="w-1 h-1 mt-1 rounded-full bg-[#8C9198]"></div>
            )}
            {categories.length > 0 &&
              categories
                .find((item) => item.id === parseInt(id))
                ?.subcategory?.find((sub) => sub.id === parseInt(id))
                ?.categoryName}
          </div>

          {/* Display the selected category and subcategory names */}
          <div className="text-[32px] uppercase font-bold mt-8">
            {categories.length > 0 &&
            categories.find((item) => item.id === parseInt(id))
              ? categories
                  .find((item) => item.id === parseInt(id))
                  .subcategory?.find((sub) => sub.id === parseInt(id))
                  ?.categoryName || "New Arrivals"
              : "New Arrivals"}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 px-8 py-5 border-b border-[#e5e7ea]">
        <button className="flex items-center bg-white text-black py-2 px-5 rounded-[2px] font-bold uppercase border border-[#A1A8AF] hover:border-black cursor-pointer">
          Filters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-2 w-5 h-5"
          >
            <path d="M6 4h2v6H6V8H3V6h3V4ZM10 8V6h11v2H10ZM14 14h2v6h-2v-2H3v-2h11v-2ZM18 18v-2h3v2h-3Z" />
          </svg>
        </button>
        <button className="flex items-center bg-white text-black py-2 px-3 rounded-[2px] font-bold uppercase border border-[#A1A8AF] hover:border-black cursor-pointer">
          Sort By
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2 w-5 h-5"
          >
            <path fill="transparent" d="M0 0h24v24H0z" />
            <path d="m18 9-6 6-6-6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      <div className="px-4 mx-auto">
        {isLoading ? (
          <p className="text-center my-5">Loading...</p>
        ) : error ? (
          <p className="text-center my-5 text-red-600">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-center my-5">
            No products found for this category.
          </p>
        ) : (
          <div>
            <div className="flex items-center justify-between px-4 py-5">
              <div className="text-[20px] text-[#191919] font-bold">
                {products.length} <span className="uppercase">Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  onClick={() => setIsTwoColumns(true)}
                  className={`cursor-pointer ${isTwoColumns && "border"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 4.3a.3.3 0 0 1 .3-.3h10.367v10.667H4V4.3Zm3 7.367V7h4.667v4.667H7ZM4 17.333h10.667V28H4.3a.3.3 0 0 1-.3-.3V17.333Zm3 3h4.667V25H7v-4.667ZM17.333 4v10.667H28V4.3a.3.3 0 0 0-.3-.3H17.333ZM25 7h-4.667v4.667H25V7ZM17.333 17.333H28V27.7a.3.3 0 0 1-.3.3H17.333V17.333Zm3 3H25V25h-4.667v-4.667Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => setIsTwoColumns(false)}
                  className={`cursor-pointer ${!isTwoColumns && "border"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path
                      d="M4 4.3a.3.3 0 0 1 .3-.3H8v4H4V4.3ZM4 10.667h4v4H4v-4ZM8 17.333H4v4h4v-4ZM4 24h4v4H4.3a.3.3 0 0 1-.3-.3V24ZM21.333 4h-4v4h4V4ZM17.333 10.667h4v4h-4v-4ZM21.333 17.333h-4v4h4v-4ZM17.333 24h4v4h-4v-4ZM14.667 4h-4v4h4V4ZM10.667 10.667h4v4h-4v-4ZM14.667 17.333h-4v4h4v-4ZM10.667 24h4v4h-4v-4ZM28 4.3a.3.3 0 0 0-.3-.3H24v4h4V4.3ZM24 10.667h4v4h-4v-4ZM28 17.333h-4v4h4v-4ZM24 24h4v3.7a.3.3 0 0 1-.3.3H24v-4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`grid ${
                isTwoColumns ? "grid-cols-2" : "grid-cols-4"
              } gap-4 p-4`}
            >
              {products.slice(0, count).map((product, i) => {
                return (
                  <Card
                    key={`${product.id}-${i}`} // Ensuring unique keys by combining product id and index
                    image={
                      product.variations?.[0]?.preview || "default-image-url"
                    } // Default image if unavailable
                    name={product.name || "No Name"}
                    subHeader={product.subHeader || "No Subheader"}
                    price={product.variations?.[0]?.productPrice?.price}
                    label={
                      product.badge && {
                        text: product.variations?.[0]?.badges?.[0]?.label || "",
                        color:
                          product.variations?.[0]?.badges?.[0]?.id === "new"
                            ? "black"
                            : product.variations?.[0]?.badges?.[0]?.id ===
                              "blue"
                            ? "blue"
                            : "",
                      }
                    }
                    colorCount={product.colors?.length || 0}
                    isAvailable={product.variations?.[0]?.orderable}
                  />
                );
              })}
            </div>

            {/* Load More Button */}
            {count < products.length && (
              <button
                onClick={() => setCount(count + 8)}
                className="bg-[#514d4d] hover:bg-[#6b6b6b] text-white w-full mx-auto py-5 my-4 uppercase font-bold cursor-pointer"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProdByCategory;
