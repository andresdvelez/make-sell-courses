import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { StateStorage } from "zustand/middleware";

// Constants
const SECRET_KEY = process.env.AES_ENCRYPTION_KEY;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

// Encrypt data with AES and generate a bcrypt signature for integrity
export const encryptCookie = async <T>({
  obj,
  nameCookie,
  expires = 7,
}: {
  obj: T;
  nameCookie: string;
  expires?: number;
}): Promise<void> => {
  try {
    const stringifiedObject = JSON.stringify(obj);

    // Encrypt the object
    const encryptedData = CryptoJS.AES.encrypt(
      stringifiedObject,
      SECRET_KEY!
    ).toString();

    // Create a signature using bcrypt
    const signature = await bcrypt.hash(encryptedData, SALT_ROUNDS!);

    // Combine encrypted data with the signature
    const payload = JSON.stringify({ encryptedData, signature });

    // Store in cookies
    Cookies.set(nameCookie, payload, { expires });
  } catch (error) {
    console.error("Error encrypting cookie:", error);
  }
};

// Decrypt and verify cookie integrity
export const decryptCookie = async <T>(
  nameCookie: string
): Promise<T | null> => {
  const cookieValue = Cookies.get(nameCookie);

  if (!cookieValue) {
    return null;
  }

  try {
    const { encryptedData, signature } = JSON.parse(cookieValue);

    // Verify the integrity of the encrypted data
    const isSignatureValid = await bcrypt.compare(encryptedData, signature);
    if (!isSignatureValid) {
      console.error("Cookie integrity check failed");
      return null;
    }

    // Decrypt the encrypted data
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY!);
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedData) as T;
  } catch (error) {
    console.error("Error decrypting cookie:", error);
    return null;
  }
};

// Remove the cookie
export const removeCookie = (nameCookie: string) => {
  Cookies.remove(nameCookie);
};

export const customCookiesStorage: StateStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const value = await decryptCookie(key); // Adjust type here
    return value ? JSON.stringify(value) : null; // Ensure the return is a string
  },

  setItem: async (key: string, value: string): Promise<void> => {
    const parsedValue = JSON.parse(value); // Parse the value into the expected object
    await encryptCookie({ obj: parsedValue, nameCookie: key });
  },

  removeItem: (key: string): void => {
    removeCookie(key);
  },
};
