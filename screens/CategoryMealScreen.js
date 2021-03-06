import React from "react";

import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealScreen.navigationOptions = navigatioNData => {
  const catId = navigatioNData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealScreen;
