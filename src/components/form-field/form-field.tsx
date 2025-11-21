import React from 'react';

interface FormFieldProps {
  id: string;
  name?: string;
  label: string;
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  min?: string | number;
  rows?: number;
  classNamePrefix?: string;
  showRequiredIndicator?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  min,
  rows,
  classNamePrefix,
  showRequiredIndicator = false
}) => {
  const fieldClassName = classNamePrefix ? `${classNamePrefix}__field` : 'form-field';
  const labelClassName = classNamePrefix ? `${classNamePrefix}__label` : 'form-field__label';
  const inputClassName = classNamePrefix ? `${classNamePrefix}__input` : 'form-field__input';
  const textareaClassName = classNamePrefix ? `${classNamePrefix}__textarea` : 'form-field__textarea';
  const requiredClassName = classNamePrefix ? `${classNamePrefix}__required` : 'form-field__required';

  const isTextarea = type === 'textarea' || rows !== undefined;

  return (
    <div className={fieldClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label} {showRequiredIndicator && <span className={requiredClassName}>*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          className={textareaClassName}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={inputClassName}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          min={min}
        />
      )}
    </div>
  );
};

