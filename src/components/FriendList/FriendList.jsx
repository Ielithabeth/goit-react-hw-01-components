import { FriendListItem } from "./FriendListItem"
import { List } from "./FriendList.styled"
import PropTypes from "prop-types"

export const FriendList = ({ friends }) => {
    return (
        <>
        <List>
            {friends.map(friend => (
              <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                id={friend.id}
              />
            ))}
        </List>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}
