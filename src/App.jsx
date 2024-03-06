import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

//pages
import Home from './pages/Home'

//layouts
import RootLayout from './layouts/RootLayout'
import DestinationLayout, { destinationLoader } from './pages/destinations/Destinations'
import CrewLayout from './layouts/CrewLayout'
import TechnologyLayout from './layouts/TechnologyLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path='destinations' element={<DestinationLayout/>} loader={destinationLoader}>

      </Route>
        
      <Route path='crew' element={<CrewLayout/>}>

      </Route>
      <Route path='technology' element={<TechnologyLayout />}>

      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
