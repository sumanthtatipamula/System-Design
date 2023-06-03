import { ConcreteUserProfileBuilder } from './ConcreteUserProfileBuilder';

const userProfile = new ConcreteUserProfileBuilder()
	.setUsername('john_doe')
	.setEmail('john@example.com')
	.setFirstName('John')
	.setLastName('Doe')
	.setBio('Software Engineer')
	.setProfilePicture('profile.jpg')
	.build();

userProfile.displayProfile();
