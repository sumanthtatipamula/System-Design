"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConcreteUserProfileBuilder_1 = require("./ConcreteUserProfileBuilder");
const userProfile = new ConcreteUserProfileBuilder_1.ConcreteUserProfileBuilder()
    .setUsername('john_doe')
    .setEmail('john@example.com')
    .setFirstName('John')
    .setLastName('Doe')
    .setBio('Software Engineer')
    .setProfilePicture('profile.jpg')
    .build();
userProfile.displayProfile();
//# sourceMappingURL=Client.js.map