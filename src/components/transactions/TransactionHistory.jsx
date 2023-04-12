import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTrow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </StyledThead>
      <StyledTbody>
        {transactions.map(({ id, type, amount, currency }, index) => {
          return (
            <StyledTrow index={index} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </StyledTrow>
          );
        })}
      </StyledTbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      currency: PropTypes.string,
      amount: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
