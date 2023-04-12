import PropTypes from 'prop-types';

import {
  StyledSection,
  StyledTitle,
  StyledStats,
  StyledStatItem,
  StyledSLabel,
  StyledSQuantity,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyledSection>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledStats>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StyledStatItem key={id}>
              <StyledSLabel>{label}</StyledSLabel>
              <StyledSQuantity>{percentage}%</StyledSQuantity>
            </StyledStatItem>
          );
        })}
      </StyledStats>
    </StyledSection>
  );
};

Statistics.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};
