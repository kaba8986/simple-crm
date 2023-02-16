export class Task {
    title: string;
    text: string;
    status: number;
    category: string;
    assignedTo: number[];
    assignedToAsObject: any [];
    creationDate: Date;
    creationDateString: string;
    creationDateMilli: number;
    dueDate: any;
    dueDateString: string;
    dueDateMilli: number;
    prio: string;
    subtasks: string[];

    constructor(obj?: any) {
        this.title = obj ? obj.title : "";
        this.text = obj ? obj.text : "";
        this.status = obj ? obj.status : 0;
        this.category = obj ? obj.category : 'General';
        this.assignedTo = obj ? obj.assignedTo : [];
        this.assignedToAsObject = obj ? obj.assignedToAsObject : [];
        this.creationDate = new Date();
        this.creationDateString = obj ? obj.creationDateString : "";
        this.creationDateMilli = obj ? obj.creationDateMilli : 0;
        this.dueDate = obj ? obj.dueDate : "";
        this.dueDateString = obj ? obj.dueDateString : "[no Due Date]";
        this.dueDateMilli = obj ? obj.dueDateMilli : 0;
        this.prio = obj ? obj.prio : "Middle";
        this.subtasks = obj ? obj.subtasks : [];
    }

    public toJSON() {
        return {
            title: this.title,
            text: this.text,
            status: this.status,
            category: this.category,
            assignedTo: this.assignedTo,
            assignedToAsObject: this.assignedToAsObject,
            creationDate: this.creationDate,
            creationDateString: this.creationDateString,
            creationDateMilli: this.creationDateMilli,
            dueDate: this.dueDate,
            dueDateString: this.dueDateString,
            dueDateMilli: this.dueDateMilli,
            prio: this.prio,
            subtasks: this.subtasks
        }
    }
}