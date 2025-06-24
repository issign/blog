import Nav from "./pages/Nav";
import Main from "./pages/Main";
import Route from "./components/links/Route";
import Create from "./pages/Create";

function App() {
  return (
    <div className="bg-primary-color text-eclipse px-20">
      <Route path="/">
        <Nav />
        <Main />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
}

export default App;
