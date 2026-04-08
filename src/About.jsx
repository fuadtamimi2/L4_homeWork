import { FaReact } from 'react-icons/fa'
import { toast } from 'react-toastify'
import ReactAlert from './ReactAlert'

function About() {
    const showToast = () => {
        toast.info('Hello from About page')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        <h2 className="h4 d-flex align-items-center gap-2 mb-3">
                            <FaReact className="text-primary" /> About Page
                        </h2>

                        <p className="text-muted mb-3">This page has a simple icon, button, toast, and alert component.</p>

                        <button className="btn btn-outline-primary mb-3" onClick={showToast}>
                            Show Toast
                        </button>

                        <ReactAlert title="Simple Alert" msg="This is a basic alert component." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
