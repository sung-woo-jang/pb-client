import Link from 'next/link';
import classes from './styles.module.scss';
import MuiAvatar from '@mui/material/Avatar';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/utils/cn';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export default function ProfileImage() {
  return (
    <Link className={classes.wrapper} href={'/timeline'}>
      <Avatar className={classes.avatar}>
        <MuiAvatar
          alt="닉네임"
          src="https://bhent.co.kr/static/b462f1e43a52d27749502c5e6ad51eaa/0d250/%25EC%2595%2588%25EC%2586%258C%25ED%259D%25AC_%25EA%25B0%2580%25EB%25A1%259C%25ED%2598%2595_celdna.jpg"
        />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      닉네임
      <span className={classes.postTimestamp}>2시간 전</span>
    </Link>
  );
}
