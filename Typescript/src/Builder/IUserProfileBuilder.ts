import { UserProfile } from './UserProfile';

export interface UserProfileBuilder {
	setUsername(username: string): UserProfileBuilder;
	setEmail(email: string): UserProfileBuilder;
	setFirstName(firstName: string): UserProfileBuilder;
	setLastName(lastName: string): UserProfileBuilder;
	setBio(bio: string): UserProfileBuilder;
	setProfilePicture(profilePicture: string): UserProfileBuilder;
	getUsername(): string;
	getEmail(): string;
	getFirstName(): string;
	getLastName(): string;
	getBio(): string;
	getProfilePicture(): string;
	build(): UserProfile;
}
