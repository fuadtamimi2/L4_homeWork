import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand fw-semibold" to="/">React Homework</Link>
                <div className="navbar-nav ms-auto d-flex flex-row gap-2">
                    <Link className="nav-link text-white" to="/">Home</Link>
                    <Link className="nav-link text-white" to="/about">About</Link>
                    <Link className="nav-link text-white" to="/form1">Form 1</Link>
                    <Link className="nav-link text-white" to="/hooks">Hooks</Link>
                    <Link className="nav-link text-white" to="/scroll">Scroll</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
