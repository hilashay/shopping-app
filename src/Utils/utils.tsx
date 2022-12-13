export const formatKeyAndValue = (key: any) => {
  console.log("key.length", key);
  if (typeof key === "number") {
    key.toString();
    return key;
  }
  return key?.charAt(0).toUpperCase() + key?.slice(1).replace(/[A-Z]/g, " $&").trim();
};

export const FontType = () => {
  return (
    <style> @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap'); </style>
  );
};
