import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-6">
                <div className="card border-0 shadow-sm text-center">
                    <div className="card-body p-4">
                        <h2 className="h4 mb-3">404 - Page Not Found</h2>
                        <p className="text-muted mb-4">The page you are looking for does not exist.</p>
                        <Link to="/" className="btn btn-primary">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404
