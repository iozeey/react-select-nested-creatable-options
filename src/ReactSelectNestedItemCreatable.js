import React, { useState } from 'react';
import Dropdown from 'react-multilevel-dropdown';
import Select from 'react-select';
import InputField from './components/InputField';
import { insertValue } from './components/helper';

const CustomDropDown = ({ innerOptions, selectProps, onCreate }) => {
  return (
    <Dropdown.Submenu position="right">
      {innerOptions.map((item, index) => {
        return (
          <>
            {index === 0 && (
              <InputField
                key={`InputField${index}`}
                selectProps={selectProps}
                currentLevelIndex={1}
                currentItem={item}
                onCreate={onCreate}
              />
            )}
            <Dropdown.Item key={`item${index}`}>
              {item.value}
              {item.innerOptions && (
                <CustomDropDownWithState key={index} innerOptions={item.innerOptions} selectProps={selectProps} />
              )}
            </Dropdown.Item>
          </>
        );
      })}
    </Dropdown.Submenu>
  );
};

const CustomDropDownWithState = ({ innerOptions, selectProps, onUpdate }) => {
  const [items, setItems] = useState(innerOptions);

  const setCustomItem = (obj) => {
    const tempItems = [...items, { ...obj }];
    setItems(tempItems);
  };

  return (
    <CustomDropDown
      innerOptions={items}
      selectProps={selectProps}
      onCreate={(obj) => {
        setCustomItem(obj);
      }}
    />
  );
};

const CustomOption = ({ selectProps, ...props }) => {
  return (
    <Dropdown.Item {...props}>
      {props.data.label}
      {props.data && props.data.innerOptions && (
        <CustomDropDownWithState
          key={Math.random(100) * 10}
          innerOptions={props.data.innerOptions}
          selectProps={selectProps}
        />
      )}
    </Dropdown.Item>
  );
};

const CustomMenuList = ({ selectProps, ...props }) => {
  const [items, setItems] = useState(props.options);

  const setCustomItem = (obj) => {
    const tempItems = [...items, { ...obj }];
    setItems(tempItems);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <InputField
        selectProps={selectProps}
        currentLevelIndex={0}
        currentItem={props.options[0]}
        key={`InputField0`}
        onCreate={(obj) => {
          setCustomItem(obj);
        }}
      />

      {items.map((item, index) => (
        <CustomOption key={index} selectProps={selectProps} data={item} />
      ))}
    </div>
  );
};

const ReactSelectNestedItemCreatable = ({options}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [customOptions, setCustomOptions] = useState(options);
  const [inputValue, setInputValue] = useState('');

  return (
    <Select
      name="color"
      options={options}
      components={{
        Option: CustomOption,
        MenuList: CustomMenuList,
      }}
      inputValue={inputValue}
      isSearchable={false}
      onMenuInputFocus={() => setIsFocused(true)}
      onChange={() => setIsFocused(false)}
      onInputChange={(val) => setInputValue(val)}
      addNewCustomOption={(newOption, target) => {
        const updatedOptions = insertValue(customOptions, target, newOption);
        setCustomOptions(updatedOptions);
      }}
      {...{
        menuIsOpen: isFocused || undefined,
        isFocused: isFocused || undefined,
      }}
    />
  );
};

export default ReactSelectNestedItemCreatable;
