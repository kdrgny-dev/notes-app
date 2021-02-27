function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
    
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add Note</button>
            </div>
            <div className="app-sidebar-notes">
                {
                    sortedNotes.map((note) => (
                        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} key={note.id} onClick={() => setActiveNote(note.id)}>
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button onClick={() => onDeleteNote(note.id)}>Delete Note</button>
                            </div>

                            <p>{note.body && note.body.substr(0, 100) + '...'}</p>

                            <small className="note-meta">Last Modified {new Date(note.lastModified).toLocaleDateString("tr")} - {new Date(note.lastModified).getHours() + ':' + new Date(note.lastModified).getMinutes()}</small>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Sidebar