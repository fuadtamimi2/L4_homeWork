import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import Home from './Home'
import About from './About'
import Form1 from './Form1'
import Page404 from './Page404'
import HookPage from './pages/HookPage'
import ScrollPage from './pages/ScrollPage'
import './App.css'

function App() {
    return (
        <div className="bg-light min-vh-100">
            <Header />

            <div className="container py-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/form1" element={<Form1 />} />
                    <Route path="/hooks" element={<HookPage />} />
                    <Route path="/scroll" element={<ScrollPage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>

            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    )
}

export default App
