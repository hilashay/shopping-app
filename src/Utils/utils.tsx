export const changeFormatKeyValueToSuccessPage = (key: number | string) => {
  if (typeof key === "number") {
    key.toString();
    return key;
  }
  return key?.charAt(0).toUpperCase() + key?.slice(1).replace(/[A-Z]/g, " $&").trim();
};
