export default generateQuestionAndAnswer;
declare function generateQuestionAndAnswer(type?: string): {
    q: string;
    a: number;
} | {
    q: string;
    a: string;
}