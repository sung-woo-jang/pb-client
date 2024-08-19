'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const SpinnerWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: theme.zIndex.modal + 1,
}));

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

function LoadingSpinner({
  size = 40,
  color = 'primary',
}: LoadingSpinnerProps): React.ReactElement {
  return (
    <SpinnerWrapper>
      <CircularProgress size={size} color={color as any} />
    </SpinnerWrapper>
  );
}

export default LoadingSpinner;
