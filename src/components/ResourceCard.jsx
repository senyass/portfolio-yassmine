// function ResourceCard({ title, image, link, className }) { 
//     return (
//         <a href={link} className={`block bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 ${className || ''}`}>
//             <img src={image} alt={title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <h3 className="text-lg font-semibold text-green-black">{title}</h3>
//             </div>
//         </a>
//     );
// }

// export default ResourceCard;

function ResourceCard({ title, image, link, className = "" }) {
    return (
        <a href={link} className={`relative block w-[360px] bg-yellow p-5 pt-10 shadow-xl hover:-translate-y-2 transition-all duration-300 ${className}`}>
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 rotate-[-4deg] bg-pink/70 opacity-120 shadow-sm" />

            <img src={image} alt={title} className=" w-full h-44 object-cover bg-white border border-green-black/20 rounded-sm"/>

            <div className="pt-5"> <p className="text-dark-pink font-bold text-sm uppercase tracking-wide"> Resource </p>

                <h3 className="text-[24px] font-bold text-green-black patrick-hand leading-tight">{title}</h3>
            </div>
        </a>
    );
}

export default ResourceCard;