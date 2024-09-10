import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';

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

interface IStarRatingTooltipProps {
  rate: number;
}

export default function StarRatingTooltip({ rate }: IStarRatingTooltipProps) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StyledRating
        name="simple-controlled"
        value={rate}
        size="large"
        readOnly
        max={3}
      />

      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <NoMaxWidthTooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={ratingTooltip.map(({ id, description }) => (
              <div className={'flex align-items-center'} key={id}>
                <StyledRating value={id} size="small" readOnly max={id} />:{' '}
                {description}
              </div>
            ))}
          >
            <HelpIcon
              onClick={handleTooltipOpen}
              style={{ cursor: 'pointer' }}
            />
          </NoMaxWidthTooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
}
