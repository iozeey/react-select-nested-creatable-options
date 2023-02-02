import React, { useState } from 'react';

const InputField = ({ selectProps, currentItem, onCreate }) => {
  const { onMenuInputFocus, addNewCustomOption } = selectProps;
  const [customInputValue, setCustomInputValue] = useState();

  // Copied from source
  const ariaAttributes = {
    'aria-autocomplete': 'list',
    'aria-label': selectProps['aria-label'],
    'aria-labelledby': selectProps['aria-labelledby'],
  };

  return (
    <input
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: 10,
        border: 'none',
        borderBottom: '1px solid lightgrey',
      }}
      autoCorrect="off"
      autoComplete="off"
      spellCheck="false"
      type="text"
      value={customInputValue}
      onChange={(e) => {
        setCustomInputValue(e.currentTarget.value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();

          const newOptionObject = { value: e.currentTarget.value, label: e.currentTarget.value };
          onCreate(newOptionObject);

          addNewCustomOption(newOptionObject, currentItem.value);
        }
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.target.focus();
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
        e.target.focus();
      }}
      onFocus={onMenuInputFocus}
      placeholder="Create..."
      {...ariaAttributes}
    />
  );
};

export default InputField;
