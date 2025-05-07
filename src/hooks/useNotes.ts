import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error('useNotes doit être utilisé dans un NoteProvider');
    }
    return context;
};