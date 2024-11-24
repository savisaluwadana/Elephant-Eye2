// ./src/InputField.js
import React from 'react';

const InputField = ({ type, id, placeholder }) => (
  <div className="w-1/3">
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="border border-gray-300 rounded p-2 w-full "
    />
  </div>
);

export default InputField;
