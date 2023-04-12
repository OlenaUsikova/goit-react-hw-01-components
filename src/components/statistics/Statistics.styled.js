import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 500px;
  border: 2px solid;
  border-color: grey;
`;
export const StyledTitle = styled.h2`
  text-align: center;
  background-color: white;
  margin: 0;
  padding: 20px;
  font-weight: 400;
`;

export const StyledStats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-top: 1px solid;
  border-color: grey;
`;

export const StyledStatItem = styled.li`
  border-color: grey;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100px;
  &:not(:last-child) {
    border-right: 1px solid;
  }
`;
export const StyledSLabel = styled.span`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: grey;

  text-align: center;
  margin-bottom: 4px;
`;

export const StyledSQuantity = styled.span`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  color: black;
  text-align: center;
`;
