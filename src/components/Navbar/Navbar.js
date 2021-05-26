import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-scroll";
import { GoX, GoThreeBars } from "react-icons/go";
import "./navbar.css";

function Navbar() {
  const { SubMenu } = Menu;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Menu onClick={setClick} selectedKeys={click} mode="horizontal">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <SubMenu title="option 4">
            <Menu.Item key="setting:5">Option 5</Menu.Item>
            <Menu.Item key="setting:6">Option 6</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </nav>
  );
}
export default Navbar;
