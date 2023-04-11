import { test, expect } from 'vitest';

import TanoshiContainerModel from '$molecules/container/TanoshiContainerModel';

test('default values are valid', () => {
	const defaultContainer: TanoshiContainerModel = new TanoshiContainerModel('c');

	expect(defaultContainer.size).toEqual('w-full');
	expect(defaultContainer.theme).toEqual('transparent');
});

test('expect Exception when theme is invalid', () => {
	const defaultContainer: TanoshiContainerModel = new TanoshiContainerModel('c');

	expect(() => {
		defaultContainer.setTheme('invalid');
	}).toThrow();
});

test('expect Exception when desktop orientation is invalid', () => {
	const defaultContainer: TanoshiContainerModel = new TanoshiContainerModel('c');

	expect(() => {
		defaultContainer.setDesktopOrientation('invalid');
	}).toThrow();
});

test('expect Exception when mobile orientation is invalid', () => {
	const defaultContainer: TanoshiContainerModel = new TanoshiContainerModel('c');

	expect(() => {
		defaultContainer.setMobileOrientation('invalid');
	}).toThrow();
});

test('expect Exception when desktop spacing is invalid', () => {
	const defaultContainer: TanoshiContainerModel = new TanoshiContainerModel('c');

	expect(() => {
		defaultContainer.setDesktopSpacing('invalid');
	}).toThrow();
});

test('expect Exception when mobile spacing is invalid', () => {
	const defaultContainer: TanoshiContainerModel = new TanoshiContainerModel('c');

	expect(() => {
		defaultContainer.setMobileSpacing('invalid');
	}).toThrow();
});
