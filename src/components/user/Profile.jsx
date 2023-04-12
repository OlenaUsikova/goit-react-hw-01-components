import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
  StyledStats,
  StyledStatItem,
  StyledSLabel,
  StyledSQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt="{username} avatar" />
        <StyledName>{username}</StyledName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>

      <StyledStats>
        <StyledStatItem>
          <StyledSLabel>Followers</StyledSLabel>
          <StyledSQuantity>{stats.followers}</StyledSQuantity>
        </StyledStatItem>
        <StyledStatItem>
          <StyledSLabel>Views</StyledSLabel>
          <StyledSQuantity>{stats.views}</StyledSQuantity>
        </StyledStatItem>
        <StyledStatItem>
          <StyledSLabel>Likes</StyledSLabel>
          <StyledSQuantity>{stats.likes}</StyledSQuantity>
        </StyledStatItem>
      </StyledStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
