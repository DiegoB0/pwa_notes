document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const notesList = document.getElementById('notesList');

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note;
            notesList.appendChild(li);
        });
    }

    function saveNote() {
        const note = noteInput.value.trim();
        if (note) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
            noteInput.value = '';
            loadNotes();
        }
    }

    addNoteButton.addEventListener('click', saveNote);
    loadNotes();
});
