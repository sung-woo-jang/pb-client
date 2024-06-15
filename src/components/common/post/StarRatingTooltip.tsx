import HelpIcon from '@mui/icons-material/Help';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FFD700',
  },
  '& .MuiRating-iconHover': {
    color: '#FFEA70',
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const ratingTooltip = [
  {
    id: 1,
    description: '특별히 인상적이지는 않지만, 무난하게 먹을 수 있는 수준.',
  },
  {
    id: 2,
    description: '다른 사람에게 추천할 만한 수준이며, 다시 방문하고 싶은 곳',
  },
  { id: 3, description: '음식이 정말 훌륭하고, 꼭 한번 경험해봐야 하는 맛집.' },
];

export default function StarRatingTooltip() {
  const [rate, setRate] = useState<number | null>(2);
  const rateValueChangeHandler = (
    event: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    setRate(newValue);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledRating
        name="simple-controlled"
        value={rate}
        onChange={rateValueChangeHandler}
        size="large"
        readOnly
        max={3}
      />

      <NoMaxWidthTooltip
        title={ratingTooltip.map(({ id, description }) => (
          <div className={'flex align-items-center'} key={id}>
            <StyledRating value={id} size="small" readOnly max={id} />:{' '}
            {description}
          </div>
        ))}
      >
        <HelpIcon />
      </NoMaxWidthTooltip>
    </div>
  );
}
