import React from "react";
import Priduct from "../../component/Product/Priduct";

const Home = () => {
  return (
    <>
      {/* intro section */}
      <div className="h-[250px] md:h-[700px] ">
        <img
          className="w-full h-full object-cover"
          src="https://ghorerbazar.com/cdn/shop/files/family.png?v=1719135031"
          alt="intro"
        />
      </div>
      <Priduct />
    </>
  );
};

export default Home;
