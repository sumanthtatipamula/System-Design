"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
class UserProfile {
    constructor(builder) {
        this.username = builder.getUsername();
        this.email = builder.getEmail();
        this.firstName = builder.getFirstName();
        this.lastName = builder.getLastName();
        this.bio = builder.getBio();
        this.profilePicture = builder.getProfilePicture();
    }
    displayProfile() {
        console.log(`Username: ${this.username}`);
        console.log(`Email: ${this.email}`);
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Bio: ${this.bio}`);
        console.log(`Profile Picture: ${this.profilePicture}`);
    }
}
exports.UserProfile = UserProfile;
//# sourceMappingURL=UserProfile.js.map