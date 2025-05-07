import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Note = {
  id: string;
  noteText: string;
  noteTitle: string;
  editMode: boolean;
  archived: boolean;
  isPinned: boolean;
}

interface NoteContextType {
  notes: Note[];
  addNotes: () => void,
  editTitle:(id:string,editMode:string)=>void
  // Ajoutez ici vos autres fonctions
}

export const NoteContext = createContext<NoteContextType | null>(null);

export const NoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNotes = () => {
    const newNote: Note = {
      id: uuidv4(),
      noteText: '',
      noteTitle: '',
      editMode: true,
      archived: false,
      isPinned: false
    };
    setNotes([newNote, ...notes]);
  };

  //Modifier le titre de la note
  function editTitle(id:string,newTitle:string):void{
    setNotes(prev=>
        prev.map(note=>
            note.id === id? {...note, noteTitle:newTitle}:note
        )
    )
  }

  const value: NoteContextType = {
    notes,
    addNotes,
    editTitle
  };

  

  return (
    <NoteContext.Provider value={value}>
      {children}
    </NoteContext.Provider>
  );
};