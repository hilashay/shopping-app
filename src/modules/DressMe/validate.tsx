type DressMeForm = { email?: string; firstName?: string };
export const validate = (values: DressMeForm) => {
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

  return errors;
};
