import TanoshiAlertModel from '$lib/molecules/alert/TanoshiAlertModel';

test('default values are valid', () => {
	const defaultAlert: TanoshiAlertModel = new TanoshiAlertModel('', '');

	expect(defaultAlert.content).toEqual('');
	expect(defaultAlert.title).toEqual('');
	expect(defaultAlert.size).toEqual('block');
	expect(defaultAlert.theme).toEqual('primary');
	expect(defaultAlert.visible).toEqual(true);
});

test('value in constructor affects content', () => {
	const defaultAlert: TanoshiAlertModel = new TanoshiAlertModel('title', 'this is a content');

	expect(defaultAlert.content).toEqual('this is a content');
});

test('expect Exception when displaySize is invalid', () => {
	const defaultAlert: TanoshiAlertModel = new TanoshiAlertModel('title', 'this is a content');

	expect(() => {
		defaultAlert.setSize('invalid');
	}).toThrow();
});

test('expect Exception when theme is invalid', () => {
	const defaultAlert: TanoshiAlertModel = new TanoshiAlertModel('title', 'this is a content');

	expect(() => {
		defaultAlert.setTheme('invalid');
	}).toThrow();
});