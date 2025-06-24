import Nav from "./pages/Nav";
import Main from "./pages/Main";
import Route from "./components/links/Route";
import Create from "./pages/Create";
import {
  useFetchCategoriesQuery,
  useFetchAllSubCategoriesQuery,
} from "./store";

function App() {
  // 같은 fetch request가 여러번 일어나지 않게 하기 위해
  const {
    data: categories,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useFetchCategoriesQuery();

  const {
    data: subCategories,
    error: subCategoriesError,
    isLoading: isSubCategoriesLoading,
  } = useFetchAllSubCategoriesQuery();

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
