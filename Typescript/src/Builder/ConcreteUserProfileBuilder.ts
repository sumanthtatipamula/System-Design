import { UserProfileBuilder } from './IUserProfileBuilder';
import { UserProfile } from './UserProfile';

export class ConcreteUserProfileBuilder implements UserProfileBuilder {
	private username!: string;
	private email!: string;
	private firstName!: string;
	private lastName!you: string;
	private bio: string = '';
	private profilePicture: string = '';

	setUsername(username: string): UserProfileBuilder {
		this.username = username;
		return this;
	}

	setEmail(email: string): UserProfileBuilder {
		this.email = email;
		return this;
	}

	setFirstName(firstName: string): UserProfileBuilder {
		this.firstName = firstName;
		return this;
	}

	setLastName(lastName: string): UserProfileBuilder {
		this.lastName = lastName;
		return this;
	}

	setBio(bio: string): UserProfileBuilder {
		this.bio = bio;
		return this;
	}

	setProfilePicture(profilePicture: string): UserProfileBuilder {
		this.profilePicture = profilePicture;
		return this;
	}

	build(): UserProfile {
		return new UserProfile(this);
	}

	getUsername(): string {
		return this.username;
	}

	getEmail(): string {
		return this.email;
	}

	getFirstName(): string {
		return this.firstName;
	}

	getLastName(): string {
		return this.lastName;
	}

	getBio(): string {
		return this.bio;
	}

	getProfilePicture(): string {
		return this.profilePicture;
	}
}
