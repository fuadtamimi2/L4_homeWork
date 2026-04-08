import { useState } from 'react'

function ReactAlert({ title, msg }) {
    const [show, setShow] = useState(true)

    if (!show) {
        return null
    }

    return (
        <div className="alert alert-warning border d-flex justify-content-between align-items-start" role="alert">
            <div>
                <h6 className="mb-1">{title}</h6>
                <p className="mb-0">{msg}</p>
            </div>
            <button
                type="button"
                className="btn-close ms-3"
                aria-label="Close"
                onClick={() => setShow(false)}
            ></button>
        </div>
    )
}

export default ReactAlert
