import { BrowserRouter,useRoutes} from "react-router-dom"
import Notes from "./pages/notes/notes"
import Navbar from "./components/navbar/navbar"
import Create_notes from "./pages/create_notes/create_notes"
import Create_user from "./pages/create_user/create_user"

function Router(){
  let router = useRoutes ([
    {path:'/',element:<Notes/>},
    {path:'/create-notes',element:<Create_notes/>},
    {path:'/create-user',element:<Create_user/>},
  ])
  return router
}
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Router>
    </Router>
    </BrowserRouter>  
    </>
  )
}
export default App
