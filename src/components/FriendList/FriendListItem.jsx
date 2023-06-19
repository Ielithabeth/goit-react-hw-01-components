import { Item } from "./FriendList.styled";
import friends from "../Data/friends.json";

export const FriendListItem = () => {
    return (
        <>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <Item key={id} isOnline={isOnline}>
                        <span></span>
                        <img src={avatar} alt="User avatar" width="48" />
                        <p>{name}</p>
                    </Item>
                )
            })}
        </>
    )
}

console.log(FriendListItem())