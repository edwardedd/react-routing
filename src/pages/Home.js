import {Link, useNavigate} from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Go to <Link to="/products">Products Page</Link></p>
        </div>
    );
}

export default HomePage;
