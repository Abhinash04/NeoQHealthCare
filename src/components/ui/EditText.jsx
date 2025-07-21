import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  fullWidth = true,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-azeret font-light text-lg leading-[21px] text-global-5 placeholder-global-5 border-0 outline-none bg-transparent transition-all duration-200 focus:text-global-1';
  
  const inputClasses = `
    ${baseClasses} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''} 
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <div className="flex-1 p-2 sm:p-2.5">
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    </div>
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;