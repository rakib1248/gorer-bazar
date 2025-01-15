import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import {
  loginesuccess,
  userAuthCreate,
} from "../../app/features/userAuth/userAuthApiSlice";

const LogineRagister = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const { input, setInput, handleInputChange } = useInput({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      dispatch(loginesuccess(input));

      setInput({
        name: "",
        email: "",
        password: "",
      });
    } else {
      // Handle signup logic
      dispatch(
        userAuthCreate({
          ...input,
          createdAt: Date.now(),
        })
      );
      setIsLogin(true);

      setInput({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
          <img
            className="w-[50%] mx-auto mb-4"
            src="https://ghorerbazar.com/cdn/shop/files/logo.webp?v=1707766182&width=500"
            alt=""
          />
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                onChange={handleInputChange}
                value={input.name}
                name="name"
                id="name"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              value={input.email}
              name="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              onChange={handleInputChange}
              value={input.password}
              name="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={toggleForm}
            className="text-blue-600 hover:underline focus:outline-none">
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogineRagister;
