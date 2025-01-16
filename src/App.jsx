import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { FrontPage } from './pages/FrontPage'
import { StagePage } from './pages/StagePage'
import { TicketPage } from './pages/TicketPage'


function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
            <Route index={true} element={<FrontPage />} />
            <Route path="/stages" element={<StagePage />} />
            <Route path="/tickets" element={<TicketPage />} />
        </Route>
      </Routes>
     </Router>
    
    </>
  )
}

export default App
