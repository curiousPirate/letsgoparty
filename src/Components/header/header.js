import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-12 my-1 rounded-full bg-white border-0 transition ease transform duration-300`;

  return (
    <div className="flex items-center justify-between bg-cyan-950 text-white py-6 px-6">
      <img
        src={require("../logodesign/logo.png")}
        className="w-20 h-20"
        alt="logo"
      />
      <nav>
        <section className="flex">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group"
            onClick={() => setIsNavOpen((prev) => !prev)}
            style={{ zIndex: 2 }}
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
            className={`flex flex-col items-center justify-between min-h-[250px] ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <li className="border-b border-white my-8 text-4xl">
              <a href="/about">ABOUT</a>
            </li>
            <li className="border-b border-white my-8 text-4xl">
              <a href="/portfolio">SEARCH EVENTS</a>
            </li>
            <li className="border-b border-white my-8 text-4xl">
              <a href="/contact">SAVED EVENTS</a>
            </li>
            <li className="border-b border-white my-8 text-4xl">
              <a href="/contact">CONTACT US</a>
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
        background: rgb(8 51 68);
        z-index: 1;
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
