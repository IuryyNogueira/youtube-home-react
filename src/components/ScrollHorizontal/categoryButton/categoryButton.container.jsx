import CategoryButtonView from "./categoryButton.view";

const CategoryButton = ({ category, select, setCategorySelect }) => {
  return (
    <CategoryButtonView category={category} select={select} setCategorySelect={setCategorySelect} />
  );
};

export default CategoryButton;
