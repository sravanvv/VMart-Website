import { useEffect, useState } from "react";
import Papa from "papaparse";

const DiscountProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([]);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBa9SJw2qEXmbmYPWSXw8TSJvdDovsSUgQPoAbByx5NRMCFr3uvFupq_Ct-Zat1SOKCDdd4b1moLNS/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          console.log("Parsed data:", results.data);
          setDiscountProducts(results.data);
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 shadow-md hover:shadow-lg-hover ">
        {discountProducts.map((product, index) => (
          <div key={index}>
            {product["Image URL"] && product["Image URL"].startsWith("http") ? (
              <img
                src={product["Image URL"]}
                alt={product["Product Name"]}
                className="w-[275px] h-[275px] object-contain mx-auto"
              />
            ) : (
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-500 rounded-md mb-3 border-2 border-gray-300">
                No Image
              </div>
            )}

            <h3 className="text-lg font-semibold mt-2">
              {product["Product Name"]}
            </h3>
            <p className="text-lg font-semibold mt-2 ">
              Original Price:{" "}
              <a className="line-through">₹{product["Old Price"]} </a>
            </p>
            <p className="text-lg font-semibold mt-2">
              Now: ₹{product["Discount Price"]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProducts;
