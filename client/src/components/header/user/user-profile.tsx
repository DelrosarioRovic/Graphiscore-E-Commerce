import authentication from "../../../hooks/authentication";
import graphiscoreLogo from "../../../assets/graphiscoreLogo.png";

interface UserProfileIf {
    handleProfileClick: () => void;
    handleCloseOpenUserInfo: boolean
}

const UserProfile = (props: UserProfileIf) => {
    const { authenticated, currentUserInfo } = authentication();
    
    return (
        <div className="relative">
            <div onClick={props.handleProfileClick}>
                <img className="w-14" src={
                    authenticated && currentUserInfo.profilePicture ? (
                        currentUserInfo.profilePicture
                    ) : (
                        graphiscoreLogo
                    )
                } alt="" />
            </div>
            {props.handleCloseOpenUserInfo && (
                <ul className="flex flex-col bottom-[-4rem] w-32 right-2 absolute text-black bg-white shadow-md rounded-md">
                    <li>
                        {currentUserInfo.displayName}
                    </li>
                    <li>
                        Sign Out
                    </li>
                </ul>
            )}
            
        </div>
       
    )
}

export default UserProfile;