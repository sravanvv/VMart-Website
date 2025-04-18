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
            console.log("Parsed data:", results.data);
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
    <div>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg shadow-md hover:shadow-lg-hover"
      >
        {discountProducts.map((product, index) => {
const fixedImageURL = product["Image URL"]?.replace(/\\/g, "/");
const imageURL = fixedImageURL?.startsWith("http")
  ? fixedImageURL
  : `${window.location.origin}${fixedImageURL}`;
  return (
    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-all duration-200">
      {fixedImageURL && fixedImageURL.startsWith("http") ? (
        <img
          src={fixedImageURL}
          alt={product["Product Name"]}
          className="w-[275px] h-[275px] object-contain mx-auto"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-md mb-3 border-1 border-gray-200">
          No Image
        </div>
      )}

      <h3 className="text-lg font-semibold mt-2">{product["Product Name"]}</h3>
      <p className="text-lg font-semibold mt-2">
        Original Price: <span className="line-through">₹{product["Old Price"]}</span>
      </p>
      <p className="text-lg font-semibold mt-1">Now: ₹{product["Discount Price"]}</p>
      <p className="text-sm text-gray-500 mt-1">
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
