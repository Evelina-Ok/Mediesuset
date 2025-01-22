import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { StagePage } from './pages/StagePage'
import { TicketPage } from './pages/TicketPage'
import { LoginPage } from './pages/LoginPage'


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path="/events" element={<StagePage />} />
            <Route path="/billetter" element={<TicketPage />} />
            <Route path="/login" element={<LoginPage />} />

        </Route>
      </Routes>
     </Router>
    
    </>
  )
}

export default App
