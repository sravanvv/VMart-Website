import { useEffect, useState } from "react";
import Papa from "papaparse";

const DiscountProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBa9SJw2qEXmbmYPWSXw8TSJvdDovsSUgQPoAbByx5NRMCFr3uvFupq_Ct-Zat1SOKCDdd4b1moLNS/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          const cleanData = results.data.filter(
            (item) => item["Product Name"] && item["Discount Price"]
          );
          setDiscountProducts(cleanData);
          setLoading(false);
        },
      }
    );
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discountProducts.map((product, index) => {
          const rawURL = product["Image URL"]?.replace(/\\/g, "/");
          const imageURL = rawURL?.startsWith("http")
            ? rawURL
            : `${window.location.origin}${rawURL}`;

          return (
            <div
              key={index}
              className="p-4 border rounded-xl shadow hover:shadow-lg transition-all duration-300 bg-white"
            >
              {imageURL ? (
                <img
                  src={imageURL}
                  alt={product["Product Name"]}
                  className="w-[275px] h-[275px] object-contain mx-auto"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-md mb-3 border border-gray-200">
                  No Image
                </div>
              )}

              <h3 className="text-lg font-semibold mt-2 text-center">
                {product["Product Name"]}
              </h3>

              <p className="text-md text-center mt-2 text-gray-600">
                Original Price:{" "}
                <span className="line-through text-gray-400">
                  ₹{product["Old Price"]}
                </span>
              </p>

              <p className="text-md font-semibold text-center text-green-600">
                Now: ₹{product["Discount Price"]}
              </p>

              <p className="text-sm text-gray-500 text-center mt-1">
                Offer valid till: {product["Offer Expiry"]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiscountProducts;
