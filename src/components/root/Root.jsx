import React from 'react';
import Header from "../header/Header";


const Root = ({ children }) => (
    <div>
        <Header/>
        {children}
        <footer/>
    </div>
);


Root.defaultProps = {
  children: null,
};

export default Root;
