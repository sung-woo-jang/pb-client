'use client';
import CommentDrawer from '@/components/common/Drawer/CommentDrawer';
import AddPPCategory from '@/components/common/Drawer/AddPPCategory';
import AddPPDrawer from '@/components/common/Drawer/AddPPDrawer';
import EditPPCategory from '@/components/common/Drawer/EditPPCategory';

export default function Drawer() {
  return (
    <>
      <CommentDrawer />
      <AddPPCategory />
      <AddPPDrawer />
      <EditPPCategory />
    </>
  );
}
