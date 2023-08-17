import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./main.css";
import { Resume } from "./pages/Resume";
import { Sells } from "./pages/Sells";
import { Sell } from "./pages/Sell";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/sells" element={<Sells />} />
            <Route path="/sells/:id" element={<Sell />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
