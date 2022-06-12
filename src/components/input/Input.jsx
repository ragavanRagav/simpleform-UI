import React from "react";

const Input = ({
  label,
  value = "",
  labelClassName,
  className,
  name,
  type,
  placeholder,
  onChange,
  changingState,
  disabled = false,
}) => {
  return (
    <div className="input d-flex justify-content-center flex-wrap m-1">
      <label className={`label ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${className} input mx-2`}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e, changingState)}
        disabled={disabled}
      />
    </div>
  );
};

const SelectInput = ({ options, labelClassName, name, label, setInput }) => {
  return (
    <div className="input w-100 d-flex justify-content-center flex-wrap m-1">
      <div>
        <label className={`label h5 ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
      </div>
      <div>
        <select
          onChange={(e) => {
            setInput(e.target.value);
          }}
        >
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
