import { BrowserRouter, Route, Routes } from "react-router-dom";

import DressMe from "./modules/DressMe/DressMe";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import HomePage from "./modules/HomePage";
import SuccessPage from "./modules/Success/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form-section" element={<DressMe />} />
        <Route path="success-section" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
