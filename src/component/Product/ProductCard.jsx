import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { phurchesUser } from "../../app/features/userAuth/userAuthApiSlice";
import Swal from "sweetalert2";
import { removeFromCart } from "../../app/features/userAuth/userAuthSlice";
import { Bounce, toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.Auth);
  const { phurches } = useSelector((state) => state.Auth);
  const handleAddToCart = (id) => {
    if (isAuthenticated) {
      // Check if the product is already in the cart
      const isAlreadyInCart = phurches.some((item) => item.id === id);

      if (isAlreadyInCart) {
        // If product exists, remove it from the cart
        dispatch(removeFromCart(id));
        toast.info("🦄 Item Remove to Card!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        // If product doesn't exist, add it to the cart
        dispatch(phurchesUser(id));
        toast.success("🦄 Item Sucessfully Add to card", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      // Show login prompt
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please log in to add items to your cart!",
      });
    }
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="rounded-t-lg object-cover w-full h-48"
        src={product.image}
        alt={product.name}
      />

      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

        {/* Product Price */}
        <p className="text-gray-500 mt-2 text-sm">Price ${product.price}</p>

        {/* Add to Cart Button */}
        <NavLink>
          <button
            onClick={() => handleAddToCart(product.id)}
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg
            hover:bg-blue-700 transition-colors duration-300">
            Add to Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default ProductCard;
