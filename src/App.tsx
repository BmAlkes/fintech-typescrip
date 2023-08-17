import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./main.css";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Header />
        <Resume />
      </main>
    </div>
  );
}

export default App;
