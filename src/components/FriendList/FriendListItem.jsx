import friends from "../Data/friends.json";

export const FriendListItem = () => {
    return (
        <>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li key={id} className="item">
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </>
    )
}