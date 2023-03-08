import { test, expect } from 'vitest'

import TanoshiPillModel from '$atoms/pill/TanoshiPillModel';

test('default values are valid', () => {
	const defaultPill: TanoshiPillModel = new TanoshiPillModel('');

	expect(defaultPill.content).toEqual('');
	expect(defaultPill.size).toEqual('md');
	expect(defaultPill.theme).toEqual('primary');
	expect(defaultPill.isOutlined).toEqual(false);
});

test('value in constructor affects content', () => {
	const defaultPill: TanoshiPillModel = new TanoshiPillModel('this is a content');

	expect(defaultPill.content).toEqual('this is a content');
});

test('expect Exception when displaySize is invalid', () => {
	const defaultPill: TanoshiPillModel = new TanoshiPillModel('');

	expect(() => {
		defaultPill.setSize('invalid');
	}).toThrow();
});

test('expect Exception when theme is invalid', () => {
	const defaultPill: TanoshiPillModel = new TanoshiPillModel('');

	expect(() => {
		defaultPill.setTheme('invalid');
	}).toThrow();
});
