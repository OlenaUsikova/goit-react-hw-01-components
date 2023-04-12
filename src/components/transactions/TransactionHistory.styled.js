import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 600px;
  border: 2px solid;
  border-color: grey;
`;

export const StyledThead = styled.thead`
  background-color: #47ade8;
  color: white;
  height: 45px;
`;
export const StyledTbody = styled.tbody`
  color: grey;
  border: 2px solid;
  border-color: grey;
  text-align: center;
`;
export const StyledTrow = styled.tr`
  height: 42px;
  padding: 10px;
  background-color: ${props => (props.index % 2 === 0 ? '#EEF0F2' : 'white')};
`;
