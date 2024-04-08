class createTask {
    constructor(title, priority, date, category){
        this.title = title;
        this.priority = priority;
        this.date = date;
        this.category = category;
        this.isComplete = false;
    }
}

class createCategory {
    constructor(title, color, tag){
        this.title = title;
        this.color = color;
        this.tag = `${tag}.svg`;
    }
}

export {createTask, createCategory};