export const toKebabCase = (str) => {
    return str
      .toLowerCase() // Convert string to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "") // Remove non-word characters
      .replace(/\-\-+/g, "-"); // Replace multiple hyphens with single hyphen
  };