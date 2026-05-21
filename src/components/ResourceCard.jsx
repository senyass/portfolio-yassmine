function ResourceCard({ title, image, link }) { 
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-green-black">{title}</h3>
            </div>
        </a>
    );
}

export default ResourceCard;