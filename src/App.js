// import "./App.css";
// import Footer from "./components/Footer";
// import Dashboard from "./components/Dashboard";
// import HomePage from "./components/HomePage";

// import PricingPage from "./components/PricingPage";
// import AboutDatabasePage from "./components/AboutDatabasePage";
// import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
// import BookTable from "./components/BookTable";

// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//       <BookTable />
//       <AboutDatabasePage />
//       <PricingPage />
//       <Section2 />
//       <Section3 />

//       <Dashboard />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import PricingPage from "./components/PricingPage";
import AboutDatabasePage from "./components/AboutDatabasePage";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import BookTable from "./components/BookTable";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import TestPage from "./components/TestPage";
import Tttt from "./components/Tttt";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/about" element={<AboutDatabasePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/tttt" element={<Tttt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
