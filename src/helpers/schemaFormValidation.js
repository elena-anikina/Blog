import * as yup from 'yup';

const validationRules = {
  'Email address': yup.string().email().required(),
  Username: yup.string().min(3).max(20).required('Это Поле обязательно для заполнения'),
  Password: yup.string().required(),
  'Repeat Password': yup.string().oneOf([yup.ref('Password'), null], 'Passwords must be the same'),
  'New password': yup.string().min(6).max(40).required(),
  'Avatar image (url)': yup.string().matches(/(http(s?):)([/|.|\w|\s|-])*/i, 'Please inter valid image url'),
  Title: yup.string().required(),
  'Short description': yup.string().required(),
  Text: yup.string().required(),
  checkbox: yup.bool().oneOf([true], 'Field must be checked'),
};

export const signInSchema = yup.object({
  'Email address': validationRules['Email address'],
  Password: validationRules['Password'],
});

export const signUpSchema = yup.object({
  Username: validationRules['Username'],
  'Email address': validationRules['Email address'],
  Password: validationRules['Password'],
  'Repeat Password': validationRules['Repeat Password'],
  checkbox: validationRules['checkbox'],
});

export const editProfileSchema = yup.object({
  Username: validationRules['Username'],
  'Email address': validationRules['Email address'],
  'New password': validationRules['New password'],
  'Avatar image (url)': validationRules['Avatar image (url)'],
});

export const articleNewEditSchema = yup.object({
  Title: validationRules['Title'],
  'Short description': validationRules['Short description'],
  Text: validationRules['Text'],
});
