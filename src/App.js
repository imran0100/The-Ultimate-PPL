import "./App.css";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

import PricingPage from "./components/PricingPage";
import AboutDatabasePage from "./components/AboutDatabasePage";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import BookTable from "./components/BookTable";

function App() {
  return (
    <div className="App">
      <HomePage />
      <BookTable />
      <PricingPage />
      <AboutDatabasePage />
      <Section2 />
      <Section3 />

      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App;
