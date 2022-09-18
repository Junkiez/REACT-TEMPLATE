import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/main.sass";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
        <Route path="/*" element={<NoPage />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
