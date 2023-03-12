import { test, expect } from 'vitest'

import TanoshiHeaderModel from '$atoms/header/TanoshiHeaderModel';

test('default values are valid', () => {
	const defaultHeader: TanoshiHeaderModel = new TanoshiHeaderModel('');

	expect(defaultHeader.content).toEqual('');
	expect(defaultHeader.displaySize).toEqual('3xl');
	expect(defaultHeader.theme).toEqual('black');
});

test('value in constructor affects content', () => {
	const defaultHeader: TanoshiHeaderModel = new TanoshiHeaderModel('this is a content');

	expect(defaultHeader.content).toEqual('this is a content');
});

test('expect Exception when displaySize is invalid', () => {
	const defaultHeader: TanoshiHeaderModel = new TanoshiHeaderModel('');

	expect(() => {
		defaultHeader.setDisplaySize('invalid');
	}).toThrow();
});

test('expect Exception when htmlSize is invalid', () => {
	const defaultHeader: TanoshiHeaderModel = new TanoshiHeaderModel('');

	expect(() => {
		defaultHeader.setHtmlSize('invalid');
	}).toThrow();
});

test('expect Exception when theme is invalid', () => {
	const defaultHeader: TanoshiHeaderModel = new TanoshiHeaderModel('');

	expect(() => {
		defaultHeader.setTheme('invalid');
	}).toThrow();
});
