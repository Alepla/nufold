import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id?: string;
  name?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  classNamePrefix?: string;
  required?: boolean;
  disabled?: boolean;
  showRequiredIndicator?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  classNamePrefix = 'form-field',
  required = false,
  disabled = false,
  showRequiredIndicator = false,
}) => {
  const fieldClassName = classNamePrefix ? `${classNamePrefix}__field` : 'form-field';
  const labelClassName = classNamePrefix ? `${classNamePrefix}__label` : 'form-field__label';
  const selectClassName = classNamePrefix ? `${classNamePrefix}__select` : 'form-field__select';
  const requiredClassName = classNamePrefix
    ? `${classNamePrefix}__required`
    : 'form-field__required';

  return (
    <div className={fieldClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label} {showRequiredIndicator && <span className={requiredClassName}>*</span>}
      </label>
      <select
        id={id}
        name={name}
        className={selectClassName}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
