import { test, expect } from 'vitest'

import TanoshiLinkModel from '$atoms/link/TanoshiLinkModel';

test('default values are valid', () => {
	const defaultLink: TanoshiLinkModel = new TanoshiLinkModel('');

	expect(defaultLink.content).toEqual('');
	expect(defaultLink.link).toEqual('#');
	expect(defaultLink.isInternal).toEqual('_self');
});

test('value in constructor affects content', () => {
	const defaultLink: TanoshiLinkModel = new TanoshiLinkModel('this is a content');

	expect(defaultLink.content).toEqual('this is a content');
});

test('boolean for isInternal translates to html value', () => {
	const defaultLink: TanoshiLinkModel = new TanoshiLinkModel('');

	defaultLink.setIsInternal(true);
	expect(defaultLink.isInternal).toEqual('_self');

	defaultLink.setIsInternal(false);
	expect(defaultLink.isInternal).toEqual('_blank');
});
