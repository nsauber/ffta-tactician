import './App.css';
import { Link, Switch, Route } from "react-router-dom";

const Home = () => ( <h2>Home</h2> );
const Category = () => ( <h2>Category</h2> );
const Products = () => ( <h2>Products</h2> );

export default function App() {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">FFTA Tactitian</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/category">Category</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/category"><Category /></Route>
          <Route path="/products"><Products /></Route>
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </>
  );
}
