import { NotebookPen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
type T = {
    id: number,
    src: string
}

const img: T[] = [
    {id: 1, src: '../assets/homeImg/img1.jpeg'},
    {id: 2, src: '../assets/homeImg/img2.jpeg'},
    {id: 3, src: '../assets/homeImg/img3.jpeg'}
]

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === img.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change d'image toutes les 3 secondes

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Carrousel */}
            <div className="absolute inset-0">
                {img.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={`Slide ${image.id}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Contenu */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bienvenue sur <span className="text-primary">BlockNote</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">
                    BlockNote est votre compagnon numérique pour la prise de notes. 
                    Organisez vos idées, créez des notes structurées et retrouvez-les 
                    facilement grâce à notre système de gestion intuitif.
                </p>
                <button 
                    onClick={() => navigate('/notes')}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/80 
                    text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                    <NotebookPen className="w-5 h-5" />
                    Commencer à noter
                </button>
            </div>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {img.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === currentIndex ? 'bg-primary' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;