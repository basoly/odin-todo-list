

const createItem = (title, desc, dueDate, priority) => {

    const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    
    }

    var id = uid();
    return {title: title, description: desc, due: dueDate, priority: priority, id: id}
}

export default createItem