import { Link } from 'react-router-dom';

function Header() {
    const menuItems = [
        
        {
            id: 1,
            name: "About",
            path: "/about"
        },
        {
            id: 2,
            name: "Projects",
            path: "/projects"
        },
        {
            id: 3,
            name: "Resume",
            path: "/resume"
        },
        {
            id: 4,
            name: "Contact",
            path: "/contact"
        },
    ];
    return (
        <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
            <div className='w-[90px] h-[90px] bg-black'>
                <img src='/selfie.png' className='w-[90px] h-[90px] bg-black' />
            </div>
            <div className='flex flex-1 justify-evenly'>
                {menuItems.map((item) => (
                    <Link key={item.id} to={item.path}className='cursor-pointer hover:underline font-medium'>
                        <h2 className='text-lg'>{item.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Header;