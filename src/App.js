import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

import Navbar from "./component/navbar";
import Header from "./header";
import SecRow from "./secRow";
import ImageRow from "./imageRow";
import Contact from "./contact";
function App() {
  return (
    <div className="body">
      <Navbar />
      <Header />
      <SecRow/>
      <ImageRow/>
      <Contact/>
      <div></div>
    </div>
  );
}

export default App;
