import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import SearchBar from "./components/SearchBar";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>

    <div>
      <Route exact path="/" component={Search}/>
      <Route exact path="/project" component={Saved}/>
      <Navbar/>
      {/* <SearchBar/> */}
      <Search/>
      <Footer/>
    </div>
    </HashRouter> 
  );
}

export default App;
