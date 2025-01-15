import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/features/userAuth/userAuthSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector((state) => state.Auth.user); // Example user data

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className=" font-bold text-center text-gray-800">Hello {name}</h1>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome to the Dashboard
        </h1>
        <div className="mt-6 space-y-4">
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Name:</span> {name}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Email:</span> {email}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Password:</span>
            {password}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
