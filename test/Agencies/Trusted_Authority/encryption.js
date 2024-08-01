"use strict";
exports.__esModule = true;
exports.EncryptionComponent = void 0;
var crypto = require("crypto");
var EncryptionComponent = /** @class */ (function () {
    function EncryptionComponent() {
        this.algorithm = 'aes-256-cbc';
    }
    EncryptionComponent.prototype.generateRandomKey = function () {
        return crypto.randomBytes(32); // 32 bytes for AES-256
    };
    EncryptionComponent.prototype.encryptData = function (data, key) {
        var iv = crypto.randomBytes(16); // Initialization vector (IV) should be randomized and unique for each encryption
        var cipher = crypto.createCipheriv(this.algorithm, key, iv);
        var encrypted = cipher.update(data, 'utf-8', 'base64');
        encrypted += cipher.final('base64');
        return "".concat(iv.toString('base64'), ":").concat(encrypted);
    };
    EncryptionComponent.prototype.decryptData = function (encryptedData, key) {
        var _a = encryptedData.split(':').map(function (part) { return Buffer.from(part, 'base64'); }), ivText = _a[0], encryptedText = _a[1];
        var decipher = crypto.createDecipheriv(this.algorithm, key, ivText);
        var decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString('utf-8');
    };
    return EncryptionComponent;
}());
exports.EncryptionComponent = EncryptionComponent;
