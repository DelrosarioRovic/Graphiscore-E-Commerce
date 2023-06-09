import Navigation from "./navigation";
import Logo from "./logo";


const HeaderWrapper = () => {
    return (
        <div className="fixed w-full flex justify-between items-center bg-black p-5">
            <Logo />
            <Navigation />
        </div>
    )
}

export default HeaderWrapper;