import TextArea from '@/components/common/TextArea';
import * as React from 'react';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';

export default function AddPPForm() {
  const { memo, setMemoHandler, alias, setAliasHandler, link, setLinkHandler } =
    useAddPPDrawer();
  return (
    <>
      <TextArea
        maxLength={50}
        label={'메모'}
        value={memo}
        onChange={setMemoHandler}
        placeholder={'플픽에 표시될 메모를 남겨주세요.'}
      />
      <TextArea
        maxLength={25}
        label={'별명'}
        value={alias}
        onChange={setAliasHandler}
        placeholder={'플픽에 표시될 별명을 남겨주세요.'}
      />
      <TextArea
        label={'링크'}
        placeholder={'관련 링크를 남겨주세요'}
        value={link}
        onChange={setLinkHandler}
      />
    </>
  );
}
