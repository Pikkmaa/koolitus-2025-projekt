import './App.css'
import {Routes, Route } from "react-router-dom";
import BandNavbar from "./components/BandNavBar";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Music from "./pages/Music";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import Booking from "./pages/Booking";
import Info from "./pages/Info";
import Bio from "./pages/Bio";
import AddEvent from "./pages/admin/AddEvent";

function App() {
  return (
    <div>
    <BandNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/info" element={<Info />} />

          <Route path="/admin/add-event" element={<AddEvent />} />
        </Routes>
        <Toaster position="top-right" />
    </div>
  );
}

export default App;

