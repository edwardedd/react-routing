import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <main>
            <h1>An Error occured</h1>
            <p>Go to <Link to="/">Home Page</Link></p>
        </main>
    );
}
export default ErrorPage;
