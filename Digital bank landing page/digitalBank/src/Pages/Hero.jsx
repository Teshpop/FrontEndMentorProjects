import {ButtonRequest} from "../Components"

const Hero = () =>
{
    return(
        <div className="h-[645px] w-screen bg-gray-50 flex flex-row">
            {/*Text*/}
            <div className="h-full w-[45%] flex justify-center items-center">
                <div className="flex flex-col justify-center items-start w-[68%] gap-8">
                    <h1 className="text-blue-900 text-5xl">
                        Next generation digital banking
                    </h1>

                    <p className="text-gray-600 text-[18px]">
                        Take your financial life online. Your Digitalbank account will be
                        a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>

                    <ButtonRequest />
                </div>
            </div>

            {/*images*/}
            {/*<div className="bg-cyan-400 h-full w-[55%] relative">
                <img
                    src="/images/bg-intro-desktop.svg" alt="intro desktop"
                    className="absolute top-[-34%] right-[-30%]"
                />

                <img
                    src="/images/image-mockups.png" alt="mockups"
                    className="absolute top-[-21%] right-[-11%] z-0"
                />
            </div>*/}
        </div>
    )
}

export default Hero;