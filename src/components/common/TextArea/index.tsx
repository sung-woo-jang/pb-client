import classes from './styles.module.scss';
import { ReactNode } from 'react';

interface TextAreaProps {
  label: ReactNode;
  maxLength?: number;
  placeholder: string;
}

export default function TextArea({
  placeholder,
  label,
  maxLength,
}: TextAreaProps) {
  return (
    <>
      <div className={classes.inputContainer}>
        <label htmlFor="name" className={`${classes.label} mb-2`}>
          {label}
        </label>
        <span className="text-sm text-gray-500">0/{maxLength}</span>
      </div>
      <input
        id="name"
        type="text"
        placeholder={placeholder}
        className={classes.input}
      />
    </>
  );
}
