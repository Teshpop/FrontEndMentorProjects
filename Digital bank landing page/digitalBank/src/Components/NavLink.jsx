
const NavLink = ({name}) =>
{
    return(
        <li
            className="group text-gray-600 text-[18px] h-full flex flex-col items-center justify-between"
        >
            <a href="#" className="flex-1 flex items-center justify-center group-hover:text-black transition-colors duration-200">
                {name}
            </a>
            <div className="bg-green-500 w-[100%] h-[4px] scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
        </li>
    )
}

export default NavLink;