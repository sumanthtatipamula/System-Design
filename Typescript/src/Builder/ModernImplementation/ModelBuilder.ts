import { Builder } from './Builder';
export function ModelBuilder<T>(): Builder<T> {
	const built: Record<string, unknown> = {};

	const builder = new Proxy(
		{},

		{
			get(target, prop) {
				console.log(prop);
				if ('build' === prop) {
					return () => built;
				}

				return (x: unknown): unknown => {
					built[prop.toString()] = x;

					return builder;
				};
			},
		}
	);

	return builder as Builder<T>;
}
