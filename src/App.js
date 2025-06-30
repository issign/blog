import { useContext } from "react";
import NavigationContext from "./components/context/navigation";
import Nav from "./pages/Nav";
import Sidebar from "./components/links/Sidebar";
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

  // Only the main page will show Nav component
  const { currentPath } = useContext(NavigationContext);

  const hideMain = ["/create"];
  const shouldHideMain = hideMain.includes(currentPath);

  // It needs to be modified as a loading page at the beginning
  if (isCategoriesLoading || isSubCategoriesLoading) return <p>Loading...</p>;

  return (
    <div className="bg-background-color text-primary-color px-20">
      {!shouldHideMain && (
        <Route path="/">
          <Nav categories={categories} subCategories={subCategories} />
          <Sidebar
            categories={categories}
            subCategories={subCategories}
          ></Sidebar>
          <Main categories={categories} subCategories={subCategories} />
        </Route>
      )}

      <Route path="/create">
        <Create categories={categories} subCategories={subCategories} />
      </Route>
    </div>
  );
}

export default App;
