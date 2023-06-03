import { UserProfileBuilder } from './IUserProfileBuilder';
export declare class UserProfile {
    private username;
    private email;
    private firstName;
    private lastName;
    private bio;
    private profilePicture;
    constructor(builder: UserProfileBuilder);
    displayProfile(): void;
}
