import { test, expect } from 'vitest';

import TanoshiNavigationModel from '$molecules/navigation/TanoshiDesktopNavigationModel';

test('default values are valid', () => {
	const defaultNavigation: TanoshiNavigationModel = new TanoshiNavigationModel();

	expect(defaultNavigation.theme).toEqual('primary');
	expect(defaultNavigation.orientation).toEqual('horizontal');
});

test('expect Exception when orientation is invalid', () => {
	const defaultNavigation: TanoshiNavigationModel = new TanoshiNavigationModel();

	expect(() => {
		defaultNavigation.setOrientation('invalid');
	}).toThrow();
});

test('expect Exception when theme is invalid', () => {
	const defaultNavigation: TanoshiNavigationModel = new TanoshiNavigationModel();

	expect(() => {
		defaultNavigation.setTheme('invalid');
	}).toThrow();
});
