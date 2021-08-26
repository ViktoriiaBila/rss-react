import { defaultCountryOption } from './constants';

export const validateFunction = {
  text: (text: string) => {
    return (
      text.length < 1 ||
      /[0-9]/.test(text) ||
      /[ ~!@#$%&*()_—+=:;"'`<>,.?^\\\|\/]/.test(text)
    );
  },

  email: (email: string) => {
    return (
      email.length < 1 || !/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email)
    );
  },

  date: (date: string) => {
    return date.length < 1;
  },

  country: (country: string) => {
    return country === defaultCountryOption;
  },

  messageText: (message: string) => {
    return message.length < 1;
  },
};
