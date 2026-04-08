import Counter from './components/Counter'
import Shope from './components/Shope'

function Home() {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h2 className="h5 mb-3">Counter</h2>
                            <Counter />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h2 className="h5 mb-3">Shop List</h2>
                            <Shope />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
