export const PASSWORD_VALIDATION = {
  required: "Required",
  minLength: {
    value: 8,
    message: "Min length is 8",
  },
  pattern: {
    // This regular expression checks for at least one letter, one number, and one special character
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message:
      "Password must contain at least 1 letter, 1 number, and 1 special character",
  },
};
