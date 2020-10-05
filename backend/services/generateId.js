function generateId(notes) {
    let maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0;
    return maxId + 1;
}

exports.generateId