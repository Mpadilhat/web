export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  export const capitalizeFirstLetter = (string) => {
    if (typeof string === "string")
      return string.charAt(0).toUpperCase() + string.substring(1);
    else return string;
  };