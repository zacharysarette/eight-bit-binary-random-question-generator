export default generateQuestionAndAnswer;

declare function generateQuestionAndAnswer(type?: string, isMultipleChoice?: boolean): {
    q: string;
    a: number;
    multipleChoice: undefined | {a:number, b:number, c:number, e:number, f:number}
} | {
    q: string;
    a: string;
    multipleChoice: undefined | {a:string, b:string, c:string, e:string, f:string} 
};