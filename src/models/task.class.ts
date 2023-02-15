export class Task {
    title: string;
    text: string;
    status: number;
    category: string;
    assignedTo: number[];
    creationDate: Date;
    creationDateString: string;
    dueDate: any;
    prio: string;
    subtasks: string[];

    constructor(obj?: any) {
        this.title = obj ? obj.title : "";
        this.text = obj ? obj.text : "";
        this.status = obj ? obj.status : 0;
        this.category = obj ? obj.category : "[no category]";
        this.assignedTo = obj ? obj.assignedTo : [];
        this.creationDate = new Date();
        this.creationDateString = "";
        this.dueDate = obj ? obj.dueDate : "-";
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
            creationDate: this.creationDate,
            creationDateString: this.creationDateString,
            dueDate: this.dueDate,
            prio: this.prio,
            subtasks: this.subtasks
        }
    }
}