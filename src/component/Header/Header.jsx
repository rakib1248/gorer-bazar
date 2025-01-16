import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/features/userAuth/userAuthSlice";

const Header = () => {
  const [isTigglled, toggle] = useToggle(false);
  const { isAuthenticated, phurches } = useSelector((state) => state.Auth);
  const Dispatch = useDispatch();
  const HandleLogout = () => {
    if (isAuthenticated) {
      Dispatch(logout());
    }
  };
  return (
    <>
      <div className="bg-[#FC8934] py-2">
        <div className="container mx-auto text-center text-white">
          <p>
            আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন: +8801321208940 |
            হট লাইন: 09642-922922
          </p>
        </div>
      </div>
      <div className="sticky top-0 bg-white z-50 shadow-md">
        <div className="w-[98%] md:w-[85%] mx-auto ">
          <div className="flex justify-between items-center">
            {/* Left Section */}
            <div className="flex gap-4 items-center">
              <i className="text-[#FC8934] text-2xl">
                <CiSearch />
              </i>
              <NavLink to={`/card`}>
                <i className="text-[#FC8934] text-4xl relative">
                  <span className="text-[15px] absolute top-[-3px] -right-[-40%]">
                    {phurches.length}
                  </span>
                  <CiShoppingCart />
                </i>
              </NavLink>
            </div>

            {/* Logo */}
            <div className="logo">
              <NavLink to={"/"}>
                <img
                  className="h-[70px] py-4"
                  src="https://ghorerbazar.com/cdn/shop/files/logo.webp?v=1707766182&width=500"
                  alt="logo"
                />
              </NavLink>
            </div>

            {/* Menu Icon (Mobile) */}
            <div className="menuIcone md:hidden">
              <i className="text-[#FC8934] text-2xl md:hidden" onClick={toggle}>
                {isTigglled ? <IoMdClose /> : <LuMenu />}
              </i>
            </div>

            {/* Menu Links */}
            <div className="menu relative">
              <div
                className={`absolute w-[180px] py-5 bg-white rounded ${
                  isTigglled ? "block" : "hidden"
                }  md:block shadow md:shadow-none right-0 top-5 md:w-auto md:h-auto md:static`}>
                <ul className="flex flex-col md:flex-row items-end gap-2 md:items-center mr-4 md:mr-0 space-x-4">
                  <li onClick={toggle}>
                    <NavLink to="/" className="text-[#FC8934]">
                      হোম
                    </NavLink>
                  </li>
                  <li onClick={toggle}>
                    <NavLink to="/shop" className="text-[#FC8934]">
                      পণ্য
                    </NavLink>
                  </li>
                  <li onClick={toggle}>
                    <NavLink to="/about" className="text-[#FC8934]">
                      সম্পর্কে
                    </NavLink>
                  </li>
                  <li onClick={toggle}>
                    <NavLink to="/contact" className="text-[#FC8934]">
                      যোগাযোগ
                    </NavLink>
                  </li>
                  <li onClick={toggle}>
                    <NavLink to="/admin-logine" className="text-[#FC8934]">
                      এডমিন ড্যাশবোর্ড
                    </NavLink>
                  </li>
                  <li onClick={toggle}>
                    <NavLink
                      onClick={HandleLogout}
                      to={isAuthenticated ? "/" : "/logine"}
                      className="text-[#FC8934]">
                      {isAuthenticated ? "লগআউট" : "লগইন"}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
