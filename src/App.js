import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Routes from "./components/Routes/Routes";

function App() {
  const { darkTheme, setDarkTheme } = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Nav setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
