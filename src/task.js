export default function createTask(title, priority, date, category) {
    let Title = title;
    let Priority = priority;
    let Date = date;
    let Category = category;

    const getTitle = () => {
        return Title;
    }

    const getPriority = () => {
        return Priority;
    }

    const getDate = () => {
        return Date;
    }

    const getCategory = () => {
        return Category;
    }

    return {
        getTitle,
        getPriority,
        getDate,
        getCategory
    }
}