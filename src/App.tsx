import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormDetailsProvider } from "./providers/FormValuesContext";
import DressMe from "./modules/DressMe/DressMe";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import HomePage from "./modules/HomePage";
import SuccessPage from "./modules/Success/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <FormDetailsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="form-section" element={<DressMe />} />
          <Route path="success-section" element={<SuccessPage />} />
        </Routes>
      </FormDetailsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
