import { Item } from "./FriendList.styled";
// import friends from "../../data/friends.json"

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
            <Item key={id} isOnline={isOnline}>
                <span></span>
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
            </Item>
            )
}