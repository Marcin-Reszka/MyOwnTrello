import { Guid } from 'guid-typescript';


export class Project {
    public name: string;
    public description: string;
    public people: string[];
    public categories:string[];
    public statuses:string[];
    public id: string;
    

    constructor(name :string, description: string, people: string[], categories: string[]){
        this.name=name;
        this.description=description;
        this.people=people;
        this.categories=categories;
        this.statuses=["To do","In progress", "Done" ]
        this.id=Guid.raw();
    }
}