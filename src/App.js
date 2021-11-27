import { useState } from "react";

function App() {
  const { darkTheme, setDarkTheme } = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <h1>azad</h1>
    </div>
  );
}

export default App;
