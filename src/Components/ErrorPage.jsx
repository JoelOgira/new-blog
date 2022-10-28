import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
    <main className="ErrorPage container">
        <div className="card p-4">
            <h2 className="card-title my-4 text-center">Error. The Requested Page is not available</h2>
            <Link to="/"><h6 className="card-text text-center">Go back to HomePage</h6></Link>
        </div>
    </main>
    )
}

export default ErrorPage;