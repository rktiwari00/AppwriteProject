import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import authService from "../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="text-sm text-gray-700 hover:text-red-600 font-medium py-2 px-4 transition-colors duration-300 ease-in-out bg-yellow-300 hover:bg-red-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
