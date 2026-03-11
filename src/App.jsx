import Navbar from "./components/Navbar";
import "./App.css"
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div style={{height:"100vh"}}>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/create-post" element={ <CreatePost /> } />
        <Route path="/edit-post/:id" element={ <EditPost />} />
      </Routes>
    </div>
  )
}
export default App;