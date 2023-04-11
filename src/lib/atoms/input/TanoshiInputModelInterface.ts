export default interface TanoshiInputModelInterface {
    _type: string;
	_id: string;
	_name: string;
	_required: boolean;
	_value: string | null;
	_readonly: boolean;
    _error: boolean;
	_errorMessage: string;

    constructor(name: string): TanoshiInputModelInterface;

    get type(): string;
	setType(value: string): TanoshiInputModelInterface;

	get id(): string;
	setId(value: string): TanoshiInputModelInterface;

	get name(): string 
	setName(value: string): TanoshiInputModelInterface;

	get required(): boolean;
	setRequired(value: boolean): TanoshiInputModelInterface;

	get value(): string | null;
	setValue(value: string | null): TanoshiInputModelInterface;

	get readonly(): boolean;
	setReadonly(value: boolean): TanoshiInputModelInterface;

	get error(): boolean;
	setError(value: boolean): TanoshiInputModelInterface;

	get errorMessage(): string;
	setErrorMessage(value: string): TanoshiInputModelInterface;

}