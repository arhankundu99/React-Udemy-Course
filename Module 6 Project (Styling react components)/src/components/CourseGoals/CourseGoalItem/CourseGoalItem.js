import React from 'react';

import styles from './CourseGoalItem.module.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
