'use client';
import CommentDrawer from '@/components/common/Drawer/CommentDrawer';
import AddPPCategory from '@/components/common/Drawer/AddPPCategory';
import AddPPDrawer from '@/components/common/Drawer/AddPPDrawer';

export default function Drawer() {
  return (
    <>
      <CommentDrawer />
      <AddPPCategory />
      <AddPPDrawer />
    </>
  );
}
