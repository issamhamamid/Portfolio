
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout.tsx";
import {Home} from "./components/Home.tsx";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {Education} from "./components/Education.tsx";
import {Experience} from "./components/Experience.tsx";
import {Contact} from "./components/Contact.tsx";

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
         <Route path='/education' element={<Education/>}/>
         <Route path='/experience' element={<Experience/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Route>

     </Routes>
   </BrowserRouter>
  )
}

export default App
