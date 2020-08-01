export const truncate = (str, num) =>
  str?.length > num ? str.substr(0, num - 1) + "..." : str;
