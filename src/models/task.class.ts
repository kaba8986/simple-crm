export class Task {
    title: string;
    text: string;
    status: string;
    category: string;
    assignedTo: number[];
    deadline: Date;
    prio: string;
    subtasks: string[];

    constructor(obj?: any) {
        this.title = obj ? obj.title : "";
        this.text = obj ? obj.text : "";
        this.status = obj ? obj.status : "";
        this.category = obj ? obj.category : "";
        this.assignedTo = obj ? obj.assignedTo : [];
        this.deadline = obj ? obj.deadline : "";
        this.prio = obj ? obj.urgency : "";
        this.subtasks = obj ? obj.subtasks : [];
    }
}