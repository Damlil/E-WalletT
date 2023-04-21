import './App.scss'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from './Views/AddCard.jsx'
import AddCard from './Views/Home.jsx'
import Error from './Views/Error'

const router = createBrowserRouter([

  {
    path: '/',
    element: <AddCard />,
    errorElement: <Error />
  },

  {
    path: '/addCard',
    element: <Home />,
    errorElement: <Error />
  }

])





function App() {


  return (
    <div className="App">
      <RouterProvider router={ router }>
        <h1>E-WALLET</h1>
        </RouterProvider>
    </div>
  )
}

export default App
