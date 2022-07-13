import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const directs = links.map((link) => (
    <a key={links} href={"#" + link}>
      {link}
    </a>

  ));
  return <nav>{directs}</nav>;
}

export default NavBar;
