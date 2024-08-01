import * as crypto from 'crypto';

// Function to generate an RSA key pair
function generateKeyPair(): { publicKey: string; privateKey: string } {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
  });
  return { publicKey: publicKey.toString(), privateKey: privateKey.toString() };
}

// Function to encrypt data with a public key
function encryptWithPublicKey(data: string, publicKey: string): string {
  const publicKeyBuffer = Buffer.from(publicKey, 'utf-8');
  return crypto.publicEncrypt(publicKeyBuffer, Buffer.from(data, 'utf-8')).toString('base64');
}

// Function to decrypt data with a private key
function decryptWithPrivateKey(encryptedData: string, privateKey: string): string {
  try {
    const decryptedBuffer = crypto.privateDecrypt({
      key: privateKey,
      passphrase: '', // Passphrase if your private key is encrypted
    }, Buffer.from(encryptedData, 'base64'));
    return decryptedBuffer.toString('utf-8');
  } catch (error) {
    console.error('Decryption Error:', error);
    throw error; // Rethrow the error to handle it at a higher level
  }
}

// Example usage
const { publicKey, privateKey } = generateKeyPair();

const message = (10).toString();
const encryptedData = encryptWithPublicKey(message, publicKey);

console.log("Encrypted Data:", encryptedData);

const decryptedMessage = decryptWithPrivateKey(encryptedData, privateKey);

console.log("Decrypted Message:", Number(decryptedMessage));
