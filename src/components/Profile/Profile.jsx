import { ProfileContainer, P } from "./Profile.styled"
import PropTypes from "prop-types"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer>
           <div>
               <img
                 src={avatar}
                 alt="User avatar"
                 width="240"
               />
               <P>{username}</P>
               <P>@{tag}</P>
               <P>{location}</P>
            </div>

            <ul>
                <li>
                  <P className="stats-name">Followers</P>
                  <span> {stats.followers}</span>
                </li>
                <li>
                  <P className="stats-name">Views</P>
                  <span> {stats.views}</span>
                </li>
                <li>
                  <P className="stats-name">Likes</P>
                  <span> {stats.likes}</span>
                </li>
              </ul>
        </ProfileContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}