import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByItemId } from '../services/api';  // Assuming you have an API function for this
import Card from "../components/Card"; // Adjust the path if necessary

function ProdByItemİd() {
  const { id } = useParams();  // Get the id from URL params
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(8);

  useEffect(() => {
    // Fetch products based on itemId (id from URL)
    getProductsByItemId(id).then((data) => {
      // Filter products to show only those with matching "childrenID"
      const filteredProducts = data.filter((product) => product.clidrenID === parseInt(id));
      setProducts(filteredProducts);  // Set the filtered products
    });
  }, [id]);

  return (
    <div className="px-4 mx-auto">
      <div className="grid grid-cols-1 tablet:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.length > 0 &&
          products.slice(0, count).map((product,i) => {
            const variation = product.variations ? product.variations[0] : {};  // Get the first variation
            const price = variation?.productPrice?.price || 'N/A';  // Get price from variations

            return (
              <Card
                key={`${i}`}  // Combine id and variantId for uniqueness
                image={variation?.preview || 'default-image-url'}  // Default image if unavailable
                name={product.name || 'No Name'}
                subHeader={product.subHeader || 'No Subheader'}
                price={price}
                label={product.badge && {
                  text: variation?.badges?.[0]?.label || '',
                  color:
                    variation?.badges?.[0]?.id === "new"
                      ? "black"
                      : variation?.badges?.[0]?.id === "blue"
                      ? "blue"
                      : "",
                }}
                colorCount={product.colors?.length || 1}
                isAvailable={variation?.orderable}
              />
            );
          })}
      </div>
      
      {count < products.length && (
        <button
          onClick={() => setCount(count + 8)}
          className="bg-[#514d4d] hover:bg-[#6b6b6b] text-white w-full mx-auto py-5 my-4 uppercase font-bold cursor-pointer"
        >
          Loading
        </button>
      )}
      
      {products.length === 0 && (
        <p className="text-center my-3">No products found for this category.</p>
      )}
    </div>
  );
}

export default ProdByItemİd;
