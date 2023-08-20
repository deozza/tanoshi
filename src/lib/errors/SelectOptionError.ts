export default class SelectOptionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'SelectOptionError';
    }   
}