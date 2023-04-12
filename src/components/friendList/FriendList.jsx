import PropTypes from 'prop-types';
import {
  StyledFriendList,
  StyledAvatar,
  StyledItem,
  StyledStatus,
  StyledName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <StyledItem key={id}>
            <StyledStatus isOnline={isOnline}>{isOnline}</StyledStatus>
            <StyledAvatar src={avatar} alt="{name} avatar" width="48" />
            <StyledName>{name}</StyledName>
          </StyledItem>
        );
      })}
    </StyledFriendList>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

//  const FriendListItem = ({avatar, name, isOnline, id}) => {
//     return (
//         <li class="item" key={id}>
//             <span class="status">{isOnline}</span>
//             <img class="avatar" src={avatar} alt="{name} avatar" width="48" />
//             <p class="name">{name}</p>
//           </li>
//     )
//  }
