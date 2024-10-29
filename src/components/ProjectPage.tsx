
function Projects() {
    const images = [
        { src: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Wheel App' },
        { src: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Project 1' },
        { src: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Employee Tracker' },
        { src: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', name: 'Project 2' },
        { src: 'https://images.pexels.com/photos/6308163/pexels-photo-6308163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', name: 'Portfolio App' },
    ];

    return (
        <>
        <h1 className='flex justify-center p-4 text-4xl font-bold text-white'>My Portfolio</h1>
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                {images.map((image, index) => (
                    <div key={index} className='relative m-5 w-90 h-80'>
                        <img src={image.src} alt={image.name} className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-90' />
                        <span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                            {image.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
export default Projects;