import './App.css';
import { Link, Switch, Route } from "react-router-dom";

const Home = () => ( <h2>Home</h2> );
const Missions = () => ( <h2>Missions</h2> );
const Rumors = () => ( <h2>Rumors</h2> );
const Items = () => ( <h2>Items</h2> );
const Clan = () => ( <h2>Clan</h2> );

export default function App() {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
        <Link className="navbar-brand" to="/">FFTA Tactician</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav">
            <Link className="nav-link" to="/missions">Missions</Link>
            <Link className="nav-link" to="/rumors">Rumors</Link>
            <Link className="nav-link" to="/items">Items</Link>
            <Link className="nav-link" to="/clan">Clan</Link>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/missions"><Missions /></Route>
          <Route path="/rumors"><Rumors /></Route>
          <Route path="/items"><Items /></Route>
          <Route path="/clan"><Clan /></Route>
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </div>
    </>
  );
}
