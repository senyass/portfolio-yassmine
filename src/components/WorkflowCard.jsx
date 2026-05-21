function WorkflowCard({color, title, description, className = ""}) {
    return (
        <div className={` text-center bg-${color} w-[475px] rounded-[50px] p-10 text-green-black shadow-md self-start ${className}`}>
            <h2 className="text-[30px] font-bold mb-3">{title}</h2>
            <p className="text-[24px]">{description}</p>
        </div>
    );
}

export default WorkflowCard;