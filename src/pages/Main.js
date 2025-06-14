import Route from "../components/links/Route";
import Create from "./Create";

function Main() {
  return (
    <div className="pt-25">
      <Route path="/create">
        <Create></Create>
      </Route>
    </div>
  );
}

export default Main;
