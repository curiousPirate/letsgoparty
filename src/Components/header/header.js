import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-12 my-1 rounded-full bg-white border-0 transition ease transform duration-300`;
  const closeMenu = () => {
    setIsNavOpen(false);
    document.getElementById("menu").classList.add("hideMenuNav");
  };

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
    document.getElementById("menu").classList.toggle("hideMenuNav");
  };

  return (
    <div className="fixed w-full z-50 flex items-center justify-between bg-slate-900 bg-opacity-80 backdrop-filter backdrop-blur-xl text-white py-6 px-6 top-0">
      <img
        src={require("../design/logo.png")}
        className="w-20 h-20"
        alt="logo"
      />
      <nav>
        <section className="flex">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={toggleMenu}
            style={{ zIndex: 20 }}
          >
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isNavOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          <ul
            id="menu"
            className={`flex flex-col items-center justify-between min-h-[250px] ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <li className="my-8 text-4xl cursor-pointer">
              <Link
                to="home"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li className="my-8 text-4xl cursor-pointer">
              <Link
                to="search-button"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={closeMenu}
              >
                SEARCH
              </Link>
            </li>
            <li className="my-8 text-4xl cursor-pointer">
              <Link
                to="bucket-list"
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                BUCKET LIST
              </Link>
            </li>
            <li className="my-8 text-4xl cursor-pointer">
              <Link
                to="newsletter"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                NEWSLETTER
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: #0f172a;
        backdrop-filter: blur(10px);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
      }
    `}</style>
    </div>
  );
}
