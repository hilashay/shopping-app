import React, { useContext, useEffect, useState } from "react";

export const MyContext = React.createContext<{ formValues: object; setFormValues?: Function }>({
  formValues: {},
});

export const useFormDetails = () => {
  const context = useContext<any>(MyContext);
  return context;
};

export const FormDetailsProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState({});

  return (
    <MyContext.Provider value={{ formValues: state, setFormValues: setState }}>
      {children}
    </MyContext.Provider>
  );
};
