import { UserProfileBuilder } from './IUserProfileBuilder';
export class UserProfile {
	private username: string;
	private email: string;
	private firstName: string;
	private lastName: string;
	private bio: string;
	private profilePicture: string;

	constructor(builder: UserProfileBuilder) {
		this.username = builder.getUsername();
		this.email = builder.getEmail();
		this.firstName = builder.getFirstName();
		this.lastName = builder.getLastName();
		this.bio = builder.getBio();
		this.profilePicture = builder.getProfilePicture();
	}

	public displayProfile(): void {
		console.log(`Username: ${this.username}`);
		console.log(`Email: ${this.email}`);
		console.log(`Name: ${this.firstName} ${this.lastName}`);
		console.log(`Bio: ${this.bio}`);
		console.log(`Profile Picture: ${this.profilePicture}`);
	}
}
