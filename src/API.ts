import { isConstructorDeclaration } from "typescript";

export enum Difficulty  {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export const fetchQuizQuestion = async (amount : number, difficulty : Difficulty ) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;
    const data = await(await fetch(endpoint)).json();
    console.log(data);
}    