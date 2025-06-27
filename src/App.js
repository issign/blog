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

  // It needs to be modified as a loading page at the beginning
  if (isCategoriesLoading || isSubCategoriesLoading) return <p>Loading...</p>;

  return (
    <div className="bg-background-color text-primary-color px-20">
      <Route path="/">
        <Nav categories={categories} subCategories={subCategories} />
        <Main categories={categories} subCategories={subCategories} />
      </Route>
      <Route path="/create">
        <Create categories={categories} subCategories={subCategories} />
      </Route>
    </div>
  );
}

export default App;
