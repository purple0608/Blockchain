import * as crypto from 'crypto';
import { SenderComponent } from '../Trusted_Authority/Authority';

export class UserComponent {
    public static publicKey: string = '';
    public static privateKey: string = '';
    public static data_for_miner: string = '';
    public static users: User[] = [];

    static generateAttributes(numUsers: number): void {
        for (let i = 0; i < numUsers; i++) {
            const user = new User();
            user.generateKeyPair();
            user.generateRandomR();
            user.generateRandomT();
            user.generateEncryptedData();
            this.users.push(user);
        }
    }
}

export class User {
    public publicKey: string = '';
    public privateKey: string = '';
    public r: number = 0;
    public t: number = 0;
    public R: number=0;
    public data_for_miner: number = 0;
    public static a:number;
    public static b:number;

    generateKeyPair(): void {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
        });
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    generateRandomR(): void {
        this.r = Math.floor(Math.random() * 100) + 1;
    }

    generateRandomT(): void {
        this.t = Math.floor(Math.random() * 100) + 1;
    }

    generateEncryptedData(): void {
        const A = SenderComponent.A;
        const B = SenderComponent.B;
        const dataToEncrypt = (A + B + this.t + this.r).toString();
        const publicKeyBuffer = Buffer.from(this.publicKey, 'utf-8');
        const dataToEncrypt2 = (this.r + this.t).toString();
        // this.R = crypto.publicEncrypt(publicKeyBuffer, Buffer.from(dataToEncrypt2, 'utf-8')).toString('base64');
        // this.data_for_miner = crypto.publicEncrypt(publicKeyBuffer, Buffer.from(dataToEncrypt, 'utf-8')).toString('base64');
        this.R=this.r+this.t;
        this.data_for_miner=A+B+this.t+this.r;
    }   

    decryptWithPrivateKey(encryptedData: string): number {
        try {
            const privateKeyBuffer = Buffer.from(this.privateKey, 'utf-8');
            const decryptedBuffer = crypto.privateDecrypt({
                key: privateKeyBuffer,
                passphrase: ''
            }, Buffer.from(encryptedData, 'base64'));
    
            // Convert decrypted buffer to number
            return parseInt(decryptedBuffer.toString('utf-8'), 10);
        } catch (error) {
            // Handle decryption error
            console.error('Decryption error:', error);
            return -1; // Or any other appropriate error handling
        }
    }
}
