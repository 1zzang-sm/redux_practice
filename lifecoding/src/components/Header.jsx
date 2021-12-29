import React from "react";
import { connect } from "react-redux";

function Header() {
  return (
    <div>
      <header>
        <h1></h1>
        World Wide WEB
      </header>
    </div>
  );
}

export default connect()(Header);
