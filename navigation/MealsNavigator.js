import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: {
      screen: MealDetailScreen
      // navigationOptions: {
      //   headerTitle: "Meal Details!!!!"
      // }
    }
  },
  {
    defaultNavigationOptions: {
      //initialRouteName:MealDetailScreen
      headerStyle: {
        backgroundColor: colors.primaryColor
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      //initialRouteName:MealDetailScreen
      headerStyle: {
        backgroundColor: colors.accentColor
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.primaryColor,
      tabBarLabel: (
        <Text style={{ fontFamily: "open-sans-bold", fontSize: 15 }}>
          Meals
        </Text>
      )
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // tabBarLabel: "Favorites",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: colors.accentColor,
      tabBarLabel: (
        <Text style={{ fontFamily: "open-sans-bold", fontSize: 15 }}>
          Meals
        </Text>
      )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-bold"
          },
          activeTintColor: colors.accentColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: {
      //initialRouteName:MealDetailScreen
      headerStyle: {
        backgroundColor: colors.primaryColor
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

const mainNavigator = createDrawerNavigator(
  {
    MealFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(mainNavigator);
