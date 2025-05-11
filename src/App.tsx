
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {MainLayout} from "./Layouts/MainLayout.tsx";
import {Home} from "./components/Home.tsx";


function App() {


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
