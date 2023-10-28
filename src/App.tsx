import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Service/Services";
import Contact from "./Components/Contact/Contact";
import Archievement from "./Components/Archievement/Archievement";
import NoInterComponent from "./Components/Utils/Nointernet/NoInternet";
import { useState ,useEffect} from "react";

function App() {
  if (window.location.hash) {
    window.history.replaceState("", document.title, window.location.pathname);
  }
  const [connection, setConnnect] = useState(navigator.onLine);
  function handleOffline(){
    setConnnect(false);
  }
  function handleOnline(){
    setConnnect(true);
  }
  useEffect(()=>{
    window.addEventListener("offline",handleOffline);
    window.addEventListener("online",handleOnline);

    return ()=>{
      window.removeEventListener("offline",handleOffline);
      window.removeEventListener("online",handleOnline);
    }

  },[connection])
  if(!connection){
    return NoInterComponent();
  }
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Archievement />
        <Services />
        <Contact />
        <a href="#" className="btn-top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </main>
    </>
  );
}

export default App;
