import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForms";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = ()=>{
     document.body.classList.remove('bg-light')
     document.body.classList.remove('bg-dark')
     document.body.classList.remove('bg-success')
     document.body.classList.remove('bg-warning')
     document.body.classList.remove('bg-danger')
     document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
  /*  if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    /*  document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "TextUtils (New Message)";
      }, 1500);
      setInterval(() => {
        document.title = "TextUtils - Install Desktop App";
      }, 2000);
      */
  /*  } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    //  document.title = "TextUtils - Light Mode";
    }
    */
  };
  return (
    <>
      <BrowserRouter>
        {/*   <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>

            <Route
               exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your Text"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
