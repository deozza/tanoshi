export default class ChoiceOptionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ChoiceOptionError';
    }   
}