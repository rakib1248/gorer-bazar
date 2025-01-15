import { useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import { cloudImgUpload } from "../../utils/cloudinaryImage";
import { useDispatch, useSelector } from "react-redux";
import {
  productCreate,
  productDelete,
} from "../../app/features/Product/ProductApiSlice";
import Swal from "sweetalert2";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products || []);
  console.log(products);

  // const [products, setProducts] = useState([
  //   { id: 1, name: "Wireless Headphones", price: 99.99 },
  //   { id: 2, name: "Smartwatch", price: 149.99 },
  // ]);

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const { input, setInput, handleInputChange } = useInput({
    name: "",
    price: "",
    dec: "",
  });
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const img = await cloudImgUpload({
      file: image,
      cloudName: "drpihbzih",
      preset: "test_upload",
    });
    dispatch(
      productCreate({
        ...input,
        image: img.secure_url,
      })
    );
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }

    setInput({ name: "", price: "", dec: "" });
  };

  const deleteProduct = (id) => {
    const swalWithCustomButtons = Swal.mixin({
      customClass: {
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
      buttonsStyling: false, // Disable default SweetAlert2 button styles
    });

    swalWithCustomButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithCustomButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          dispatch(productDelete(id));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithCustomButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Dashboard
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Creation Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Create Product
          </h2>
          <div className="space-y-4">
            <form onSubmit={handleCreateProduct}>
              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Product Descreption
                </label>
                <input
                  type="text"
                  name="dec"
                  value={input.dec}
                  onChange={handleInputChange}
                  placeholder="Enter product descreption"
                  className="w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Product Image
                </label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  ref={fileInputRef}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Product Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={handleInputChange}
                  placeholder="Enter product price"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white mt-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Create Product
              </button>
            </form>
          </div>
        </div>

        {/* Product List Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Product List
          </h2>
          <div className="space-y-4">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-500">${Number(product.price)}</p>
                  </div>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors">
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
