import React from "react";
import './BoxLayout.css'

const BoxLayout = ({children, title, width, height}) => {
  return (
    <div className="BoxLayout" style={{width:width}}>
      <header className="BoxLayout_header">
          <h2 className="BoxLayout_title">{title}</h2>
      </header>
      {children}
    </div>
  );
};

export default BoxLayout;
