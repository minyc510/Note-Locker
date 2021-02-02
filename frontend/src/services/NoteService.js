export async function getAllNotes() {
    const response = await fetch('/api/notes');
    return await response.json();
}

export async function createNote(data) {
    const response = await fetch(`/api/note`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({note: data})
    })
    return await response.json();
}