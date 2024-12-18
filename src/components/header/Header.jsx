import "./header.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Assets from "../../assets/icons/Assets";

import compIcon from "../../assets/icons/swap.png";
import favorIcon from "../../assets/icons/love.svg";
import userIcon from "../../assets/icons/users.svg";
import cartIcon from "../../assets/icons/cart.svg";

const links = [
  { id: 1, name: "Compare", name1: "Products", icon: compIcon },
  { id: 2, name: "Favourite", name1: "WishList", icon: favorIcon },
  { id: 3, name: "Login", name1: "My Account", icon: userIcon },
];

export default function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 ">
              <p>Free shipping for over $100 purchase</p>
            </div>
            <div className="col-6">
              <p className="text-end">
                Hotline: <a href="+23480616322766">+234 8061 632276</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">More-Links</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search products here..."
                  aria-label="Search products here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3 fs-6" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links">
                {links.map((link, idx) => (
                  <div key={idx}>
                    <Link>
                      <img src={link.icon} className="right-links" />
                      <p>
                        {link.name} <br /> {link.name1}
                      </p>
                    </Link>
                  </div>
                ))}
                <div>
                  <Link className="cartIcon">
                    <img src={cartIcon} className="right-links cart" />
                    <div className="counter">
                      <span className="badge bg-white text-dark">{"0"}</span>{" "}
                      <p>{"$0.00"}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
