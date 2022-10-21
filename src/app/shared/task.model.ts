import { Guid } from 'guid-typescript';


export class Task{
    public name: string;
    public category:string;
    public worker: string;
    public status: string;
    public description: string;
    public dateCreated: Date;
    public dateModified: Date;
    public id:string;
    public projectId:string;

    constructor(name:string, category:string, worker:string,status:string, description:string, projectId:string){
        this.name=name;
        this.category=category;
        this.worker=worker;
        this.status=status;
        this.description=description;
        this.dateCreated= new Date();
        this.dateModified=this.dateCreated;
        this.id=Guid.raw();
        this.projectId=projectId;
    }
}

