document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const notesList = document.getElementById('notesList');

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.textContent = note;

            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Borrar';
            deleteButton.classList.add('delete-button'); // Add this line
            deleteButton.onclick = () => deleteNote(index);
            li.appendChild(deleteButton);
 

            notesList.appendChild(li);
        });
    }


    function deleteNote(index) {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
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
