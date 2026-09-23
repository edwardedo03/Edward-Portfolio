import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PortfolioList from "./components/PortfolioList";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <PortfolioList />
      <Footer />
    </>
  );
}

export default App;
