import NavBar from "../Navbar/Navbar";
import Header from "../Header/Header";
import About from "../About/About";
import React from "react";

function App() {
  const aboutRef = React.useRef(null);
  const homeRef = React.useRef(null);
  const scrollToBottom = (section) => {
    console.log(section);
    if (section === 1)
      homeRef.current.scrollIntoView({
        behavior: "smooth",
      });
    else if (section === 2)
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    else
      homeRef.current.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <div className="App">
      <NavBar scroll={scrollToBottom} />
      <Header inputRef={homeRef} />
      <About inputRef={aboutRef} />
    </div>
  );
}
export default App;
