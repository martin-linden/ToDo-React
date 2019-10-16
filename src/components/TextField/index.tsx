import React from "react";
import styles from "./styles";

export default ({
  value,
  onChange,
  onClick
}: {
  value: string;
  onChange: Function;
  onClick: Function;
}) => {
  return (
    <input
      style={styles}
      autoFocus={true}
      value={value}
      onChange={event => onChange(event.target.value)}
      onKeyPress={event => {
        // Om Enter trycktes
        if (event.key === "Enter") {
          // Calla onClick-funktionen som har
          // skickats ner från parent
          onClick();
        }
      }}
    />
  );
};
