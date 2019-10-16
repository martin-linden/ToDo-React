import React from "react";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default ({ todo, deleteTodo }: { todo: string; deleteTodo: Function }) => {
  return (
    <li onClick={() => deleteTodo(todo)} className="list-item-hover" style={styles.listItem}>
      <FontAwesomeIcon style={styles.icon} size={"xs"} icon={faCheck} />
      {todo}
    </li>
  );
};
