import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { AdminLoginesuccess } from "../../app/features/admin/adminApiSlice";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { input, setInput, handleInputChange } = useInput({
    email: "",
    password: "",
  });
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    toast.error("🦄 Sorry This Page access only for admin!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    Dispatch(AdminLoginesuccess(input));
    setInput({ email: "", password: "" });
    navigate("/logine");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Admin Login
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter user Name"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
