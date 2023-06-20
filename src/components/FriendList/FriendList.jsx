import { FriendListItem } from "./FriendListItem"
import { List } from "./FriendList.styled"
import PropTypes from "prop-types"

export const FriendList = ({ friends }) => {
    return (
        <List>
            <FriendListItem
                avatar={friends.avatar}
                name={friends.name}
                isOnline={friends.isOnline}
            />
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}
