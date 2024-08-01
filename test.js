"use strict";
exports.__esModule = true;
var crypto = require("crypto");
// Function to generate an RSA key pair
function generateKeyPair() {
    var _a = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    }), publicKey = _a.publicKey, privateKey = _a.privateKey;
    return { publicKey: publicKey.toString(), privateKey: privateKey.toString() };
}
// Function to encrypt data with a public key
function encryptWithPublicKey(data, publicKey) {
    var publicKeyBuffer = Buffer.from(publicKey, 'utf-8');
    return crypto.publicEncrypt(publicKeyBuffer, Buffer.from(data, 'utf-8')).toString('base64');
}
// Function to decrypt data with a private key
function decryptWithPrivateKey(encryptedData, privateKey) {
    try {
        var decryptedBuffer = crypto.privateDecrypt({
            key: privateKey,
            passphrase: ''
        }, Buffer.from(encryptedData, 'base64'));
        return decryptedBuffer.toString('utf-8');
    }
    catch (error) {
        console.error('Decryption Error:', error);
        throw error; // Rethrow the error to handle it at a higher level
    }
}
// Example usage
var _a = generateKeyPair(), publicKey = _a.publicKey, privateKey = _a.privateKey;
var message = (10).toString();
var encryptedData = encryptWithPublicKey(message, publicKey);
console.log("Encrypted Data:", encryptedData);
var decryptedMessage = decryptWithPrivateKey(encryptedData, privateKey);
console.log("Decrypted Message:", Number(decryptedMessage));
