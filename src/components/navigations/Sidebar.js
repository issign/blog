import { useFetchCategoriesQuery } from "../../store";
import { useFetchAllSubCategoriesQuery } from "../../store";

function Sidebar() {
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

  console.log(categories);
  return <div>Sidebar</div>;
}

export default Sidebar;
