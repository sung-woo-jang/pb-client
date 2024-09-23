import classes from '@/components/common/Drawer/AddPPCategory/styles.module.scss';
import TextArea from '@/components/common/TextArea';
import { ReactNode } from 'react';
import useAddPPCategoryDrawer from '@/store/slice/drawer/addPPCategoryDrawer/useAddPPCategoryDrawer';

interface AddPPCategoryFormProps {
  children?: ReactNode;
}

export default function AddPPCategoryForm({
  children,
}: AddPPCategoryFormProps) {
  const {
    categoryName,
    link,
    memo,
    categoryNameChangeHander,
    memoChangeHander,
    linkChangeHander,
  } = useAddPPCategoryDrawer();
  return (
    <div className={classes.wrapper}>
      <TextArea
        label={'새 카테고리명'}
        maxLength={25}
        placeholder={'새 카테고리명을 입력해주세요.'}
        value={categoryName}
        onChange={categoryNameChangeHander}
      />

      {children}
      <TextArea
        label={'메모'}
        maxLength={25}
        placeholder={'메모를 남겨주세요.'}
        value={memo}
        onChange={memoChangeHander}
      />
      <TextArea
        label={'관련 링크'}
        maxLength={25}
        placeholder={'https://.'}
        value={link}
        onChange={linkChangeHander}
      />
    </div>
  );
}
