import TanoshiParagraphModel from '../../../../src/components/atoms/paragraph/TanoshiParagraphModel'

test('default values are valid',  () => {

	const defaultParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('')

    expect(defaultParagraph.content).toEqual('')
    expect(defaultParagraph.displaySize).toEqual('base')
    expect(defaultParagraph.theme).toEqual('black')
    expect(defaultParagraph.hasSpacing).toBeTruthy()
})

test('value in constructor affects content',  () => {

	const defaultParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('this is a content')

    expect(defaultParagraph.content).toEqual('this is a content')
})

test('expect Exception when displaySize is invalid',  () => {

	const defaultParagraph: TanoshiParagraphModel = new TanoshiParagraphModel('')
    defaultParagraph.setDisplaySize('invalid')

    expect(defaultParagraph.content).toEqual('')
})