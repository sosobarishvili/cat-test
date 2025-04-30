import React from 'react';
import styles from './Checkbox.module.css';

function Checkbox({ label, checked, onChange, disabled }) {

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={styles.input}
      />
      {label}
    </label>
  );
}

export default Checkbox;
