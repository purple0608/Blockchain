import * as crypto from 'crypto';
import { EncryptionComponent } from './encryption';
import { UserComponent } from '../Medical_User/User';
import {User} from '../Medical_User/User'
export class SenderComponent {
    public readonly encryptionComponent: EncryptionComponent = new EncryptionComponent();
    public publicKey: string = '';
    public static privateKey: Buffer = Buffer.alloc(0); // Initialize as an empty buffer
    public static data: string = '';
    public static A: number = Math.floor(Math.random() * 100) + 1;
    public static B: number = Math.floor(Math.random() * 100) + 1;
    public static users: User[] = []; // Change 'User' to 'UserComponent'

    getKeyPair(): void {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
        });
        this.publicKey = publicKey;
        SenderComponent.privateKey = Buffer.from(privateKey, 'utf-8'); // Convert privateKey string to a Buffer
    }

    getAEncryptedData(): void {
        // Convert number to string before encryption
        const dataToEncrypt = SenderComponent.A.toString();

        // Encrypt data
        const encryptedData = this.encryptionComponent.encryptData(dataToEncrypt, this.encryptionComponent.generateRandomKey());

        // Set class property
        SenderComponent.data = encryptedData;

        // Log encrypted data and public key
        this.sendEncryptedData(encryptedData, this.publicKey);
    }

    static decryptWithPrivateKey(encryptedData: string): number {
        // Decrypt data
        const decryptedBuffer = crypto.privateDecrypt({
            key: this.privateKey, // Use privateKey buffer
            passphrase: '' // Passphrase if your private key is encrypted
        }, Buffer.from(encryptedData, 'base64'));

        // Convert decrypted buffer to number
        return parseInt(decryptedBuffer.toString('utf-8'), 10);
    }

    encryptWithPublicKey(data: string, publicKey: string): string {
        return crypto.publicEncrypt(publicKey, Buffer.from(data, 'utf-8')).toString('base64');
    }

    sendEncryptedData(encryptedData: string, publicKey: string): void {
        // Simulate sending data to another component
        console.log('Encrypted Data:', encryptedData);
        console.log('Public Key:', publicKey);
    }

    static generateUsers(numUsers: number): void {
        User.a=SenderComponent.A;
        User.b=SenderComponent.B;
        UserComponent.generateAttributes(numUsers);
        this.users = UserComponent.users;
    }
}

