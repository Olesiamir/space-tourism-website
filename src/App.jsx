import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

//pages
import Home from './pages/Home'

//layouts
import RootLayout from './layouts/RootLayout'
import Destinations, { destinationLoader } from './pages/destinations/Destinations'
import TechnologyLayout from './layouts/TechnologyLayout'
import Crew, { crewLoader } from './pages/crew/Crew'
import Technology, { technologyLoader } from './pages/technology/Technology'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path='destinations' element={<Destinations/>} loader={destinationLoader} />     
      <Route path='crew' element={<Crew/>} loader={crewLoader} />
      <Route path='technology' element={<Technology />} loader={technologyLoader} />
    </Route>
  )
)

function App() {
  return (
    <div className="app relative">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
