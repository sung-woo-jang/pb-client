import classes from './styles.module.scss';
import React, { ReactNode } from 'react';

interface TextAreaProps {
  label: ReactNode;
  maxLength?: number;
  placeholder: string;
  value?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextArea({
  placeholder,
  label,
  maxLength,
  onChange,
  value,
}: TextAreaProps) {
  return (
    <>
      <div className={classes.inputContainer}>
        <label htmlFor="name" className={`${classes.label} mb-2`}>
          {label}
        </label>
        {maxLength && (
          <span className="text-sm text-gray-500">0/{maxLength}</span>
        )}
      </div>
      <input
        id="name"
        type="text"
        placeholder={placeholder}
        className={classes.input}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
