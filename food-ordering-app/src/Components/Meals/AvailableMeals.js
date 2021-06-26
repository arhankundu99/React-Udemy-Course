import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const { requestError, isLoading, sendRequest: fetchMealsRequest } = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: "https://react-http-74835-default-rtdb.firebaseio.com/meals.json",
    };

    const applyData = (data) => {
      let loadedMeals = [];
      for (const key in data) {
        let loadedMealItem = {};

        loadedMealItem.description = data[key]["description"];
        loadedMealItem.id = data[key]["id"];
        loadedMealItem.name = data[key]["name"];
        loadedMealItem.price = data[key]["price"];

        loadedMeals.push(loadedMealItem);
      }
      setMeals(loadedMeals);
    };

    fetchMealsRequest(requestConfig, applyData);
  }, [fetchMealsRequest]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {!isLoading && requestError ? (
          <p>Unable to fetch available meals</p>
        ) : (
          <ul>{mealsList}</ul>
        )}
      </Card>
    </section>
  );
};
export default AvailableMeals;
