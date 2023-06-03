"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteUserProfileBuilder = void 0;
const UserProfile_1 = require("./UserProfile");
class ConcreteUserProfileBuilder {
    constructor() {
        this.bio = '';
        this.profilePicture = '';
    }
    setUsername(username) {
        this.username = username;
        return this;
    }
    setEmail(email) {
        this.email = email;
        return this;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
        return this;
    }
    setLastName(lastName) {
        this.lastName = lastName;
        return this;
    }
    setBio(bio) {
        this.bio = bio;
        return this;
    }
    setProfilePicture(profilePicture) {
        this.profilePicture = profilePicture;
        return this;
    }
    build() {
        return new UserProfile_1.UserProfile(this);
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getBio() {
        return this.bio;
    }
    getProfilePicture() {
        return this.profilePicture;
    }
}
exports.ConcreteUserProfileBuilder = ConcreteUserProfileBuilder;
//# sourceMappingURL=ConcreteUserProfileBuilder.js.map