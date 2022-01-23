export interface Question {
	id: number,
	question: string,
	answers : {
		correctAnswer: string,
		incorrectAnswer1: string,
		incorrectAnswer2: string,
		incorrectAnswer3: string,
	}
}
