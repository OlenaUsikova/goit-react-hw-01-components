import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  background-color: white;
  width: 330px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
`;

export const StyledItem = styled.li`
  width: 300px;
  height: 120px;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  display: flex;
  align-items: center;
`;

export const StyledStatus = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 8px;
  height: 8px;
  padding: 10px;
  border-radius: 50%;
  margin: 15px;
`;

export const StyledAvatar = styled.img`
  width: 90px;
  height: 90px;
  box-shadow: 5px 5px 3px 2p;
  border: 1px solid;
  border-radius: 5%;
  margin-right: 20px;
`;

export const StyledName = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: black;
`;
