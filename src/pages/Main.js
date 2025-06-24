import Route from "../components/links/Route";
import Create from "./Create";
import Sidebar from "../components/navigations/Sidebar";

function Main() {
  return (
    <div className="pt-20">
      <Sidebar></Sidebar>
      <Route path="/create">
        <Create></Create>
      </Route>
    </div>
  );
}

export default Main;
