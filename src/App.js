
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./blog/BlogDetails";
import Perfil from "./perfil/Perfil";
import PerfilDetails from "./perfil/PerfilDetails";
import Create from "./blog/CreateBlog";
import Navbar from "./main/Navbar";
import Home from "./main/Home";
import Login from "./main/login";
import NotFound from "./default/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      
        <div className="content">
          <Switch>
          
            <Route exact path="/">
            <Perfil />
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="/user/:id">
              <PerfilDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
