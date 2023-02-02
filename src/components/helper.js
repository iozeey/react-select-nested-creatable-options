export const insertValue = (options, target, newOption) => {
  for (var i = 0; i < options.length; i++) {
    if (options[i].value === target) {
      options.push(newOption);
      break;
    } else if (options[i].innerOptions) {
      insertValue(options[i].innerOptions, target, newOption);
    }
  }
  return options;
};
