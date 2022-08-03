import logo from "./logo.svg";
import "./App.css";
import { Form, Footer } from "./containers";
import { Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Form></Form>
      <Footer />
    </div>
  );
}

export default App;
