import { Grid, List } from 'lucide-react';
import React from 'react';
import Note from '../components/Note';
import AddNote from '../components/AddNote';
import { useNotes } from '../hooks/useNotes';

const Notes = () => {
    const {notes} = useNotes()
    return (
        <>
            <div className='m-auto mb-4 mt-4 md:w-3/4'>
                <div className='flex justify-between p-1'>
                <h1 className='text-2xl font-semibold'>Notes</h1>
                <div>
                    <button className='btn hover:btn-primary mr-2 cursor-pointer hover:text-white'><List /></button>
                    <button className='btn hover:btn-primary cursor-pointer hover:text-white'><Grid /></button>
                </div>
                </div>
                
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8'>
                <ul>
                    {notes.map((note)=>(
                        <li key={note.id}>
                            <Note 
                                editMode={note.editMode} 
                                id={note.id}
                                text={note.noteText}
                                title={note.noteTitle}
                                archived={note.archived}
                                isPinned={note.isPinned}
                        />
                        </li>
                    ))}
                </ul>
                
            </div>
            <AddNote/>
        </>
        
    );
};

export default Notes;