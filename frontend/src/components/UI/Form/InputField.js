import React from 'react'

const InputField = ({
  type = 'text',
  label,
  name,
  id,
  additionnalClass,
  value,
  required = false,
  maxLength = 255,
  minLength = 0,
}) => (
  <div className="FormItem">
    <input
      type={type}
      name={name}
      id={id}
      className={`FormItem-input${additionnalClass ? ` ${additionnalClass}` : ''}`}
      value={value}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
    />
    <label
      className="FormItem-label"
      htmlFor={id}  
    >
      <span className="FormItem-floatLabel">
        { label }
      </span>
    </label>
  </div>
)

export default InputField