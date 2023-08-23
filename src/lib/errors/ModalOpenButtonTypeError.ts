export default class ModalOpenButtonTypeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ModalOpenButtonTypeError';
    }   
}