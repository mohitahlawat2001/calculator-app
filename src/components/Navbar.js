import React, {useState} from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
  const [clicked, setClicked] = useState("Basic")

  return (
    <div>
        <div className="l-navbar" id="navbar">
            <nav className="nav">
                <div>
                    <div className="nav__brand">
                        <a href="/" className="nav__logo">Calculator</a>
                    </div>
                    <div className="nav__list">
                        <Link to="/Basic" className={`nav__link ${clicked==="Basic" ? "active" : ""}`} onClick={() => setClicked("Basic")}>
                            <iconify-icon icon="mdi:calculator" className="nav__icon"></iconify-icon>
                            <span className="nav__name">Basic</span>
                        </Link>
                        <Link to="/scientific" className={`nav__link ${clicked==="Scientific" ? "active" : ""}`} onClick={() => setClicked("Scientific")}>
                            <iconify-icon icon="mdi:math-integral-box" className="nav__icon"></iconify-icon>
                            <span className="nav__name">Scientific</span>
                        </Link>
                        <Link to="/graphing" className={`nav__link ${clicked==="Graphing" ? "active" : ""}`} onClick={() => setClicked("Graphing")}>
                            <iconify-icon icon="mdi:graph-line" className="nav__icon"></iconify-icon>
                            <span className="nav__name">Graphing</span>
                        </Link>
                        <Link to="/financial" className={`nav__link ${clicked==="Financial" ? "active" : ""}`} onClick={() => setClicked("Financial")}>
                            <iconify-icon icon="fluent-mdl2:financial-solid" className="nav__icon"></iconify-icon>
                            <span className="nav__name">Financial</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
};

export default Navbar;