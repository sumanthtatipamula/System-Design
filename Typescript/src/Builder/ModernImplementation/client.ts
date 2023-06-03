import { ModelBuilder } from './ModelBuilder';
import { User } from './IUser';
const user = ModelBuilder<User>()
	.id(1)

	.name('Theo')

	.email('theo@example.com')

	.build();

console.debug(user);
