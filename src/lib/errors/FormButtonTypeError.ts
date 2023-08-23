export default class FormButtonTypeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FormButtonTypeError';
    }   
}