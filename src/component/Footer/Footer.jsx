const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#FC8934] py-9 ">
        <div className="w-[98%] md:w-[85%] mx-auto flex justify-between flex-col md:flex-row text-white">
          <p>Copyright © {currentYear} Rakibul Islam. All rights reserved.</p>
          <p>© ঘরের বাজার {currentYear}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
