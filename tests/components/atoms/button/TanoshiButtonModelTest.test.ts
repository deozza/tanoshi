import { test, expect } from 'vitest'

import TanoshiButtonModel from '$atoms/button/TanoshiButtonModel';

test('default values are valid', () => {
	const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('');

	expect(defaultButton.content).toEqual('');
	expect(defaultButton.size).toEqual('md');
	expect(defaultButton.theme).toEqual('primary');
	expect(defaultButton.type).toEqual('button');
	expect(defaultButton.isDisabled).toEqual(false);
	expect(defaultButton.isOutlined).toEqual(false);
});

test('value in constructor affects content', () => {
	const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('this is a content');

	expect(defaultButton.content).toEqual('this is a content');
});

test('expect Exception when displaySize is invalid', () => {
	const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('');

	expect(() => {
		defaultButton.setSize('invalid');
	}).toThrow();
});

test('expect Exception when theme is invalid', () => {
	const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('');

	expect(() => {
		defaultButton.setTheme('invalid');
	}).toThrow();
});

test('expect Exception when type is invalid', () => {
	const defaultButton: TanoshiButtonModel = new TanoshiButtonModel('');

	expect(() => {
		defaultButton.setType('invalid');
	}).toThrow();
});
