import styled from 'styled-components';

export const StyledProfile = styled.div`
  background-color: white;
  width: 330px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 0;
  box-shadow: 5px 5px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledAvatar = styled.img`
  width: 220px;
  border: 1px solid;
  border-radius: 50%;
`;

export const StyledName = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: black;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const StyledTag = styled.p`
  font-size: 18px;
  color: grey;
  margin-bottom: 10px;
`;

export const StyledLocation = styled.p`
  font-size: 18px;
  color: grey;
`;

export const StyledStats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border: 1px solid;
  border-color: grey;
`;

export const StyledStatItem = styled.li`
  border-color: grey;
  padding-top: 5px;
  padding-bottom: 5px;
  &:not(:last-child) {
    border-right: 1px solid;
  }
`;

export const StyledSLabel = styled.span`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: grey;
  width: 110px;
  text-align: center;
`;

export const StyledSQuantity = styled.span`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  color: black;
  text-align: center;
`;
