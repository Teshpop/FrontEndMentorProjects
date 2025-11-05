import {NavLink, ButtonRequest} from '../Components'

const NavBar = () =>
{
    return(
        <header className="h-[80px] w-screen bg-white flex z-40 relative">
            {/*Logo*/}
            <div className="w-full h-full flex items-center justify-center">
                <img src='/images/logo-dark.svg' alt="Logo" />
            </div>

            {/*Navlinks*/}
            <nav className="h-full w-full">
                <ul className="h-full w-full flex items-center justify-evenly">
                    <NavLink name={"Home"}/>
                    <NavLink name={"About"}/>
                    <NavLink name={"Contact"}/>
                    <NavLink name={"Blog"}/>
                    <NavLink name={"Careers"}/>
                </ul>
            </nav>

            {/*Button navigation*/}
            <div className="w-full h-full flex items-center justify-center">
                <ButtonRequest/>
            </div>
        </header>
    )
}

export default NavBar;