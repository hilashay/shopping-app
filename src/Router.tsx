import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home/Home";
import Form from "./modules/Form";
import Reviews from "./modules/Reviews";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/Reviews" element={<Reviews />} />
    </Routes>
  );
};

export default Router;
