const Hero = () =>
{
    return(
        <div className="h-[645px] w-screen bg-gray-50 flex flex-row">
            {/*Text*/}
            <div className="bg-green-500 h-full w-[40%]">
                <h1>
                    Next generation digital banking
                </h1>
                <p>
                    Take your financial life online. Your Digitalbank account will be
                    a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
            </div>

            {/*images*/}
            <div className="bg-cyan-400 h-full w-[60%] relative">
                <img
                    src="/images/bg-intro-desktop.svg" alt="intro desktop"
                    className="absolute top-[-34%] right-[-30%]"
                />

                <img
                    src="/images/image-mockups.png" alt="mockups"
                    className="absolute top-[-21%] right-[-11%] z-0"
                />
            </div>
        </div>
    )
}

export default Hero;