import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <nav>
                <Link to="/" alt="Render a todo list that can be edited.">Todo List</Link>
                <Link to="https://icons8.com/icons/set/favicon" target="_blank" title="Where I got my fav (or favorite) icon from.">Fav Icons</Link>
            </nav>
            <h1>Landing Page</h1>
        </>
    );
};

export default LandingPage;