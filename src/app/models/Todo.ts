export class Todo {
    id:number;
    title: string;
    completed: boolean;
    //location is not required, thus '?';
    location?: string;
}