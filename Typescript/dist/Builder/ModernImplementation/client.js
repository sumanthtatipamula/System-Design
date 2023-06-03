"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelBuilder_1 = require("./ModelBuilder");
const user = (0, ModelBuilder_1.ModelBuilder)()
    .id(1)
    .name('Theo')
    .email('theo@example.com')
    .build();
console.debug(user);
//# sourceMappingURL=client.js.map