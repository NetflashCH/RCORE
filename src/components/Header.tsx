import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const wrapperRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
  const activeHandler = (e: React.MouseEvent) => {
    const lis = wrapperRef.current.querySelectorAll(
      "li",
    ) as NodeListOf<HTMLLIElement>;

    lis.forEach((li) => {
      li.children[0].classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <header
      className="
        py-[1.5rem]
        border-r
        border-[#676767]
        min-w-[250px]
      "
    >
      <nav className="grid center gap-[2rem]">
        <a href="/">
          <img
            src="/src/assets/image.png"
            width={100}
            height={34}
            className="logo"
            alt="Vite logo"
          />
        </a>
        {/* each li in this ul will have after sudo el with bg gold*/}
        <ul className="grid center text-[1.4rem]" ref={wrapperRef}>
          <li className="order-y py-[.8rem] pr-[2.9rem] border-[#676767] relative">
            <Link
              onClick={activeHandler}
              className={`not-active active after:bg-[#F29E20] after:absolute after:right-0 after:top-0   after:content-[''] after:block after:h-full after:w-4`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="border-b py-[.8rem] pr-[2.9rem] border-[#676767] relative">
            <Link
              onClick={activeHandler}
              className={`not-active after:bg-[#F29E20] after:absolute after:right-0 after:top-0  after:content-[''] after:block after:h-full after:w-4`}
              to="/add-whiteboard"
            >
              Add Whiteboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
