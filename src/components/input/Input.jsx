import React from "react";

const Input = ({
  label,
  value = "",
  labelClassName,
  className,
  name,
  required = false,
  pattern,
  title,
  type,
  placeholder,
  onChange,
  changingState,
  disabled = false,
}) => {
  return (
    <div className="input d-flex justify-content-between flex-wrap m-1">
      <label
        className={`label w-50 h5 d-flex justify-content-end ${labelClassName}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`${className} input mx-2`}
        value={value}
        type={type}
        pattern={pattern}
        required={required}
        title={title}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e, changingState)}
        disabled={disabled}
      />
    </div>
  );
};

const SelectInput = ({
  options,
  labelClassName,
  className,
  name,
  selected,
  required = false,
  label,
  setInput,
}) => {
  return (
    <div className="input d-flex justify-content-between flex-wrap m-1">
      <label
        className={`label h5 w-50 d-flex justify-content-end ${labelClassName}`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="w-50">
        <select
          className={`${className} input w-50 h-100 mx-2`}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={selected}
          required={required}
        >
          <option value="" disabled>
            Select your option
          </option>
          {options?.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export { Input, SelectInput };
