import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./main.css";
import { Resume } from "./pages/Resume";
import { Sells } from "./pages/Sells";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Header />
        <Resume />
        <Sells />
      </main>
    </div>
  );
}

export default App;
