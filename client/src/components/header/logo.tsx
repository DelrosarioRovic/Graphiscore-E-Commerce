//logo image
const logo = "https://media.discordapp.net/attachments/1045257540428107808/1085395043457716324/IMG_20230315_105201.png";

const Logo = () => {
    return (
        <div className="flex items-center">
            <img className="w-14" src={logo} alt="logo" />
            <h2 className="text-white text-2xl">raphiScore</h2>
        </div>
    )
}

export default Logo;