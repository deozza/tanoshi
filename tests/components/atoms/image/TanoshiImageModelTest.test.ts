import { test, expect } from 'vitest';

import TanoshiImageModel from '$atoms/image/TanoshiImageModel';

test('default values are valid', () => {
	const defaultImage: TanoshiImageModel = new TanoshiImageModel('path', 'description');

	expect(defaultImage.content).toEqual('path');
	expect(defaultImage.alt).toEqual('description');
	expect(defaultImage.theme).toEqual('');
	expect(defaultImage.filter).toEqual('');
});

test('expect Exception when content size is invalid', () => {
	expect(() => {
		const defaultImage: TanoshiImageModel = new TanoshiImageModel('', 'description');
	}).toThrow();
});

test('expect Exception when alt size is invalid', () => {
	expect(() => {
		const defaultImage: TanoshiImageModel = new TanoshiImageModel('path', '');
	}).toThrow();
});

test('expect Exception when theme is invalid', () => {
	const defaultImage: TanoshiImageModel = new TanoshiImageModel('path', 'description');

	expect(() => {
		defaultImage.setTheme('invalid');
	}).toThrow();
});

test('expect Exception when filter is invalid', () => {
	const defaultImage: TanoshiImageModel = new TanoshiImageModel('path', 'description');

	expect(() => {
		defaultImage.setFilter('invalid');
	}).toThrow();
});
