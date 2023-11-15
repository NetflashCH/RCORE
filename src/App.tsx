import { Routes, Route } from "react-router-dom";
import AddWhiteBoard from "./components/AddWhiteBoard";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <main
        className="
          flex
          place-content-center
          space-between
          gap-8
          mx-auto
          w-[1358.220px]
          h-[879px]
        "
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-whiteboard" element={<AddWhiteBoard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
