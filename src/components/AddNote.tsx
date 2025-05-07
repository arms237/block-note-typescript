
import { FaPlus } from 'react-icons/fa';
import { useNotes } from '../hooks/useNotes';

const AddNote = () => {
    const { addNotes } = useNotes(); // Utilisation du hook personnalisé

    return (
        <div className='fixed bottom-16 right-16'>
            <button 
                onClick={addNotes}
                className='bg-primary p-7 rounded-2xl text-2xl shadow-xl cursor-pointer hover:bg-secondary hover:text-white'
            >
                <FaPlus/>
            </button>
        </div>
    );
};

export default AddNote;