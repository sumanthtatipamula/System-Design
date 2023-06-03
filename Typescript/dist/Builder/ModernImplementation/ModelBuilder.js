"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBuilder = void 0;
function ModelBuilder() {
    const built = {};
    const builder = new Proxy({}, {
        get(target, prop) {
            console.log(prop);
            if ('build' === prop) {
                return () => built;
            }
            return (x) => {
                built[prop.toString()] = x;
                return builder;
            };
        },
    });
    return builder;
}
exports.ModelBuilder = ModelBuilder;
//# sourceMappingURL=ModelBuilder.js.map