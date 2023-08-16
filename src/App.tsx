import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./main.css";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <Resume />
      </main>
    </>
  );
}

export default App;
