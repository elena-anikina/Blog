import { re, reUrl } from './regex-email';

const getSignUpValidationOptions = (label, watchPassword) => {
  switch (label) {
    case 'Email address':
      return {
        required: 'Поле обязательно для заполнения',
        pattern: { value: re, message: 'Email должен быть корректным почтовым адресом' },
      };

    case 'Username':
      return {
        required: 'Поле обязательно для заполнения',
        minLength: { value: 3, message: 'Username должен быть от 3 до 20 символов' },
        maxLength: { value: 20, message: 'Username должен быть от 3 до 20 символов' },
      };

    case 'Password':
      return {
        required: 'Поле обязательно для заполнения',
      };

    case 'Repeat Password':
      return {
        required: 'Поле обязательно для заполнения',
        validate: (value) => value === watchPassword || 'Password и Repeat Password должны совпадать',
      };

    case 'New password':
      return {
        minLength: { value: 6, message: 'New password должен быть от 6 до 40 символов' },
        maxLength: { value: 40, message: 'New password должен быть от 6 до 40 символов' },
      };

    case 'Avatar image (url)':
      return {
        pattern: { value: reUrl, message: 'Avatar image должен быть корректным url' },
      };

    case 'Title':
    case 'Short description':
    case 'Text':
      return {
        required: 'Поле обязательно для заполнения',
        onChange: (event) => {
          localStorage.setItem(label, event.target.value);
        },
      };

    default:
      return {
        required: 'Поле обязательно для заполнения',
      };
  }
};

export default getSignUpValidationOptions;
