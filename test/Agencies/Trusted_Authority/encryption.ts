import * as crypto from 'crypto';

export class EncryptionComponent {
    private readonly algorithm: string = 'aes-256-cbc';

    generateRandomKey(): Buffer {
        return crypto.randomBytes(32); // 32 bytes for AES-256
    }

    encryptData(data: string, key: Buffer): string {
        const iv = crypto.randomBytes(16); // Initialization vector (IV) should be randomized and unique for each encryption
        const cipher = crypto.createCipheriv(this.algorithm, key, iv);
        let encrypted = cipher.update(data, 'utf-8', 'base64');
        encrypted += cipher.final('base64');
        return `${iv.toString('base64')}:${encrypted}`;
    }

    decryptData(encryptedData: string, key: Buffer): string {
        const [ivText, encryptedText] = encryptedData.split(':').map(part => Buffer.from(part, 'base64'));
        const decipher = crypto.createDecipheriv(this.algorithm, key, ivText);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString('utf-8');
    }
}
