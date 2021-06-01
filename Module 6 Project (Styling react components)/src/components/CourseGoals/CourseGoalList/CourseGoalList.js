import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import styles from './CourseGoalList.module.css';

const CourseGoalList = props => {
  return (
    <ul className={styles["goal-list"]}>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
