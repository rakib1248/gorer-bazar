import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Priduct = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <h1 className=" text-center py-10 text-2xl font-semibold">
        {" "}
        All Products
      </h1>

      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Priduct;
