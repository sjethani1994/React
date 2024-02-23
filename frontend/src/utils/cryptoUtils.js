import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  try {
    // Check if data is provided
    if (!data) {
      throw new Error("Data is required for encryption");
    }

    var encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "secret key 123"
    ).toString();
    // Return the encrypted data
    return encryptedData;
  } catch (error) {
    // Handle any errors
    console.error("Encryption error:", error);
    return null;
  }
};
// Decryption function
export const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, "secret key 123");
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
