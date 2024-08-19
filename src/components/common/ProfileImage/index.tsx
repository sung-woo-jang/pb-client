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

interface ProfileImageProps {
  profileImageUrl: string;
  visitDate: string;
  userName: string;
  userId: string;
}

export default function ProfileImage({
  profileImageUrl,
  userName,
  visitDate,
  userId,
}: ProfileImageProps) {
  return (
    <Link className={classes.wrapper} href={`/timeline/user/${userId}`}>
      <Avatar className={classes.avatar}>
        {/* TODO: src 수정 */}
        <MuiAvatar
          alt={userName}
          src={`http://localhost:8000/dummy/profile_image/${profileImageUrl}`}
        />
        <AvatarFallback>{userName.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {userName}
        <p className={classes.postTimestamp}>{visitDate}</p>
      </div>
    </Link>
  );
}
