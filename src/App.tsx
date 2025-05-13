
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout.tsx";
import {Home} from "./components/Home.tsx";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/'  element={<MainLayout/>}>
         <Route index element={<Home/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
