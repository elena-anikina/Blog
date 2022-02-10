const getValidationStyleInput = (errors, label) => ({
  border: errors.hasOwnProperty(label) ? '1px solid #F5222D' : '1px solid #D9D9D9',
});

export default getValidationStyleInput;
