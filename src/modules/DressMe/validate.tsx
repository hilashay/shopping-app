type DressMeForm = {
  email?: string;
  firstName?: string;
  lastName?: string;
  adress?: string;
  phone?: string;
  budget?: string;
  shirtSize?: string;
  pantsSize?: string;
  other?: string;
};

const validateRequiredWithMinLength = (
  fieldName: string,
  values: any,
  errors: any,
  minLength: number
) => {
  if (!values[fieldName]) {
    errors[fieldName] = "Required";
  } else if (values.fieldName.length < minLength) {
    errors[fieldName] = `At least ${minLength} characters`;
  }
};

export const validate = (values: DressMeForm) => {
  //   debugger;
  console.log("validate");
  const errors: DressMeForm = {};
  console.log("errors object when everything's valid", errors);
  if (!values.email) {
    errors.email = "Required";
    errors["email"] = "Required";
    console.log(" errors.email no email", errors);
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
    console.log(" errors.email invalid", errors);
  }

  validateRequiredWithMinLength("firstName", values, errors, 2);
  validateRequiredWithMinLength("lastName", values, errors, 2);
  validateRequiredWithMinLength("adress", values, errors, 4);

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 10) {
    errors.phone = "At least 10 characters";
  } else if (typeof values.phone !== "number") {
    errors.phone = "Not valid, try again";
  }

  if (!values.budget) {
    errors.budget = "Required";
  }

  return errors;
};
