import { AvatarImage, AvatarFallback, Avatar } from './ui/avatar';
import Link from 'next/link';
import { Button } from './ui/button';

import { CardHeader, CardContent, CardFooter, Card } from './ui/card';
import TempImage from './../../../public/assets/img/banner/02.jpg';
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { HeartIcon, MessageCircleIcon } from '../Icon';

export function TimelineCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center p-4">
        <Link className="flex items-center gap-2 text-sm font-semibold" href="#">
          <Avatar className="w-8 h-8 border">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          닉네임
          <span className="text-gray-500 dark:text-gray-400 text-xs">2시간 전</span>
        </Link>
        <div style={{ cursor: 'pointer' }}>
          <ContentCopyIcon />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Image alt="Image" className="object-fill aspect-square" src={TempImage} height={400} width={400} />
      </CardContent>
      <CardFooter className="grid gap-2 p-2 pb-4">
        <div className="flex items-center w-full">
          <Button size="icon" variant="ghost">
            <HeartIcon className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <MessageCircleIcon className="w-4 h-4" />
          </Button>
        </div>
        <div className="px-2 text-sm w-full grid gap-1.5">
          컨텐츠 영역 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit reiciendis ad officiis beatae est
          libero quam placeat animi soluta deleniti alias dignissimos voluptas laborum, eum dolorem veniam inventore
          rerum ipsa.
        </div>
      </CardFooter>
    </Card>
  );
}
