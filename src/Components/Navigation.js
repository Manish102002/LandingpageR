
export default function Navigation() {
    return (
        <div>
            <nav className=" flex justify-between text-center mt-8 mx-16">

                <logo>
                    <img src="./Images/brand_logo.png" width="76px" height="72px" alt="logo" />
                </logo>
                <div className="lg:flex lg:gap-5 lg:font-semibold lg:block  hidden">
                    <a href="#">Menu</a>
                    <a href="#">Location</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                <button className=" px-9 py-[1px] font-bold rounded-md text-white bg-[#D01C28]">Login</button>

            </nav>
        </div>
    )
}