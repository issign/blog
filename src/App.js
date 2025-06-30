import { useContext } from "react";
import NavigationContext from "./components/context/navigation";
import HomePage from "./pages/HomePage";
import PostsListPage from "./pages/PostsListPage";
import Nav from "./components/nav/Nav";
import Route from "./components/links/Route";
import CreatePage from "./pages/CreatePage";
import {
  useFetchCategoriesQuery,
  useFetchAllSubCategoriesQuery,
  useFetchPostsQuery,
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

  const {
    data: posts,
    error: postsError,
    isLoading: isPostsLoading,
  } = useFetchPostsQuery();

  // Only the main page will show Nav component
  const { currentPath } = useContext(NavigationContext);

  const hideMain = ["/create"];
  const shouldHideMain = hideMain.includes(currentPath);

  // It needs to be modified as a loading page at the beginning
  if (isCategoriesLoading || isSubCategoriesLoading || isPostsLoading)
    return <p>Loading...</p>;

  return (
    <div className="bg-background-color text-primary-color px-20">
      {!shouldHideMain && (
        <>
          <Nav categories={categories} subCategories={subCategories} />
          <Route path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/posts">
            <PostsListPage
              categories={categories}
              subCategories={subCategories}
            ></PostsListPage>
          </Route>
        </>
      )}

      <Route path="/create">
        <CreatePage categories={categories} subCategories={subCategories} />
      </Route>
    </div>
  );
}

export default App;
