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
export const validate = (values: DressMeForm) => {
  //   debugger;
  console.log("validate");
  const errors: DressMeForm = {};
  console.log("errors object when everything's valid", errors);
  if (!values.email) {
    errors.email = "Required";
    console.log(" errors.email no email", errors);
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
    console.log(" errors.email invalid", errors);
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "At least 2 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "At least 2 characters";
  }

  if (!values.adress) {
    errors.adress = "Required";
  } else if (values.adress.length < 4) {
    errors.adress = "At least 4 characters";
  }

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
