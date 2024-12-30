import bcrypt from "bcrypt";

export const hashPass = async (unHashPass: string) => {
  return bcrypt.hash(unHashPass, 9).then((hash) => hash);
};

export const comparePass = async (unHashPass: string, hashPass: string) => {
  return bcrypt.compare(unHashPass, hashPass).then((result) => result);
};
