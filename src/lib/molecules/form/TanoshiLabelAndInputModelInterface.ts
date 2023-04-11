import type TanoshiInputModelInterface from '$atoms/input/TanoshiInputModelInterface';
import type TanoshiLabelModel from '$atoms/label/TanoshiLabelModel';

export default interface TanoshiLabelAndInputModelInterface {
	tanoshiLabelModel: TanoshiLabelModel;
	tanoshiInputModel: TanoshiInputModelInterface;
};
