
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GiftList from './pages/GiftList';
import GiftForm from './pages/GiftForm';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GiftProvider } from './context/GiftContext';
import GiftDetails from './pages/GiftDetails';



function App() {
  return (
    <GiftProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<GiftList />} />
          <Route path="/add" element={<GiftForm />} />
          <Route path="/details/:id" element={<GiftDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GiftProvider>
  );
}

export default App;