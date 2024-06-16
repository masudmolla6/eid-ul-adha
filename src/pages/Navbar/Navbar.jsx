import Marquee from "react-fast-marquee";

const Navbar = () => {
    return (
      <div className="navbar sticky top-0 z-30 bg-opacity-30 bg-black text-white">
        <Marquee>
          <p className="text-teal-300">
            ঈদের অনাবিল আনন্দে ভরে উঠুক সবার জীবন ! ঈদ মোবারক
          </p>
        </Marquee>
      </div>
    );
};

export default Navbar;