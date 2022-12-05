import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost normal-case text-xl">Digital twin</a>
      </div>
      <div className="flex-none">
        <a href="/login">
          <button className="btn btn-primary px-7 mr-8">Get access</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
