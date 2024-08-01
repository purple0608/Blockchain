"use strict";
exports.__esModule = true;
exports.User = exports.UserComponent = void 0;
var crypto = require("crypto");
var Authority_1 = require("../Trusted_Authority/Authority");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.generateAttributes = function (numUsers) {
        for (var i = 0; i < numUsers; i++) {
            var user = new User();
            user.generateKeyPair();
            user.generateRandomR();
            user.generateRandomT();
            user.generateEncryptedData();
            this.users.push(user);
        }
    };
    UserComponent.publicKey = '';
    UserComponent.privateKey = '';
    UserComponent.data_for_miner = '';
    UserComponent.users = [];
    return UserComponent;
}());
exports.UserComponent = UserComponent;
var User = /** @class */ (function () {
    function User() {
        this.publicKey = '';
        this.privateKey = '';
        this.r = 0;
        this.t = 0;
        this.R = 0;
        this.data_for_miner = 0;
    }
    User.prototype.generateKeyPair = function () {
        var _a = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
        }), publicKey = _a.publicKey, privateKey = _a.privateKey;
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    };
    User.prototype.generateRandomR = function () {
        this.r = Math.floor(Math.random() * 100) + 1;
    };
    User.prototype.generateRandomT = function () {
        this.t = Math.floor(Math.random() * 100) + 1;
    };
    User.prototype.generateEncryptedData = function () {
        var A = Authority_1.SenderComponent.A;
        var B = Authority_1.SenderComponent.B;
        var dataToEncrypt = (A + B + this.t + this.r).toString();
        var publicKeyBuffer = Buffer.from(this.publicKey, 'utf-8');
        var dataToEncrypt2 = (this.r + this.t).toString();
        // this.R = crypto.publicEncrypt(publicKeyBuffer, Buffer.from(dataToEncrypt2, 'utf-8')).toString('base64');
        // this.data_for_miner = crypto.publicEncrypt(publicKeyBuffer, Buffer.from(dataToEncrypt, 'utf-8')).toString('base64');
        this.R = this.r + this.t;
        this.data_for_miner = A + B + this.t + this.r;
    };
    User.prototype.decryptWithPrivateKey = function (encryptedData) {
        try {
            var privateKeyBuffer = Buffer.from(this.privateKey, 'utf-8');
            var decryptedBuffer = crypto.privateDecrypt({
                key: privateKeyBuffer,
                passphrase: ''
            }, Buffer.from(encryptedData, 'base64'));
            // Convert decrypted buffer to number
            return parseInt(decryptedBuffer.toString('utf-8'), 10);
        }
        catch (error) {
            // Handle decryption error
            console.error('Decryption error:', error);
            return -1; // Or any other appropriate error handling
        }
    };
    return User;
}());
exports.User = User;
