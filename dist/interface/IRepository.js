"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRepository = void 0;
class IRepository {
    create({ data }) {
        throw new Error('This method inst implemented');
    }
    read() {
        throw new Error('This method inst implemented');
    }
    update({ data, id }) {
        throw new Error('This method inst implemented');
    }
    delete({ id }) {
        throw new Error('This method inst implemented');
    }
}
exports.IRepository = IRepository;
