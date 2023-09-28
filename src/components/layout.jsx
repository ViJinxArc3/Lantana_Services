import Nav from "./Nav";
import Footer from "./Footer";


//import font-awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// utils/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


export const metadata = {
  title: "Lantana Services",
  description: "Construction & Home improvement",
};

const Layout = ({ children }) => {
  return (
    <>
    
      <div className="app">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
