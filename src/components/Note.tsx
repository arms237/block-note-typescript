import { Check, Ellipsis, Trash } from 'lucide-react';
import React from 'react';
import AddNote from './AddNote';
import { MdArchive, MdDelete, MdDownload, MdPushPin } from 'react-icons/md';

type noteType ={
    id:string,
    text:string,
    title:string,
    archived:boolean,
    isPinned:boolean,editMode:boolean
}
const Note = ({id,text,title,archived,isPinned,editMode}:noteType) => {
    return (
        <>
            <div className=' relative rounded-sm border border-base-300 '>
                <input 
                    type="text"
                    value={title} 
                    placeholder='Titre' 
                    className='w-full p-2 outline-0 font-bold text-xl '
                />
                <textarea 
                    name="note" 
                    id={id}
                    value={text}
                    className='w-full outline-0 resize-none p-2 h-50'
                    placeholder='Note'
                ></textarea>
                <div className='flex justify-between p-2'>
                    
                    <button><Check/></button>
                    <button className='group relative cursor-pointer'><Ellipsis/>
                        <ul className='absolute top-4 left-2.5 bg-base-200 rounded-lg rounded-tl-none pointer-events-none opacity-0 group-hover:opacity-100 translate-y2 groupe-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-100 p-2'>
                            <li className='flex items-center hover:bg-primary hover:text-white rounded-sm p-1.5'><MdDelete/> Supprimer</li>
                            <li className='flex items-center hover:bg-primary hover:text-white rounded-sm p-1.5'><MdPushPin/>Epingler</li>
                            <li className='flex items-center hover:bg-primary hover:text-white rounded-sm p-1.5'><MdArchive/>Archiver</li>
                            <li className='flex items-center hover:bg-primary hover:text-white rounded-sm p-1.5'><MdDownload/> Télécharger</li>
                        </ul>
                    </button>
                </div>
                
            </div>
        </>
        
    );
};

export default Note;