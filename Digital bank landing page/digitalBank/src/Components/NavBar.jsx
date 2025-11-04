const NavBar = () =>
{
    return(
        <header className="h-[80px] w-screen bg-white flex">
            {/*Logo*/}
            <div className="w-full h-full flex items-center justify-center">
                <img src='/images/logo-dark.svg' alt="Logo" />
            </div>

            {/*Navlinks*/}
            <nav className="h-full w-full">
                <ul className="h-full w-full flex items-center justify-evenly">
                    <li className="text-gray-600 text-[1rem]">Home</li>
                    <li className="text-gray-600 text-[1rem]">About</li>
                    <li className="text-gray-600 text-[1rem]">Contact</li>
                    <li className="text-gray-600 text-[1rem]">Blog</li>
                    <li className="text-gray-600 text-[1rem]">Careers</li>
                </ul>
            </nav>

            {/*Button navigation*/}
            <div className="w-full h-full flex items-center justify-center">
                <a href="#" className='pt-3 pb-3 pl-7 pr-7 rounded-[40px] button-font text-white bg-button'>
                    Request Invite
                </a>
            </div>
        </header>
    )
}

export default NavBar;