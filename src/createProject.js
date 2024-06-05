const createProject = (title) => {

    const uid = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    
    }

    var id = uid();
    return {title: title, id: id}
}

export default createProject