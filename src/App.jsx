import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}