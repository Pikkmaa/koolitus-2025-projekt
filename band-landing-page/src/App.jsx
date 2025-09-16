import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import BandNavbar from "./components/BandNavBar";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import Booking from "./pages/Booking";
import Info from "./pages/Info";
import Bio from "./pages/Bio";
import AddEvent from "./pages/admin/AddEvent";
import AddMerch from "./pages/admin/AddMerch";
import { AuthProvider} from "./context/AuthProvider";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function AppRoutes() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/events" element={<Events />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/info" element={<Info />} />

      {loggedIn ? (
        <>
          <Route path="/admin/add-event" element={<AddEvent />} />
          <Route path="/admin/add-merch" element={<AddMerch />} />
        </>
      ) : (
        <Route path="/admin/*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BandNavbar />
      <AppRoutes />
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;