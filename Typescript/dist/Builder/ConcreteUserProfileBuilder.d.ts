import { UserProfileBuilder } from './IUserProfileBuilder';
import { UserProfile } from './UserProfile';
export declare class ConcreteUserProfileBuilder implements UserProfileBuilder {
    private username;
    private email;
    private firstName;
    private lastName;
    you: string;
    private bio;
    private profilePicture;
    setUsername(username: string): UserProfileBuilder;
    setEmail(email: string): UserProfileBuilder;
    setFirstName(firstName: string): UserProfileBuilder;
    setLastName(lastName: string): UserProfileBuilder;
    setBio(bio: string): UserProfileBuilder;
    setProfilePicture(profilePicture: string): UserProfileBuilder;
    build(): UserProfile;
    getUsername(): string;
    getEmail(): string;
    getFirstName(): string;
    getLastName(): string;
    getBio(): string;
    getProfilePicture(): string;
}
