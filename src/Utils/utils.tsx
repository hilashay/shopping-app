export const formatKey = (key: any) => {
  console.log("key.length", key);
  if (key.length > 2) {
    return key?.charAt(0).toUpperCase() + key?.slice(1).replace(/[A-Z]/g, " $&").trim();
  }
};
