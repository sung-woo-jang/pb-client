import React, { useState } from 'react';
import { FaCopy, FaMapLocation } from 'react-icons/fa6';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import Tooltip from '@/components/common/Tooltip/AddressTooltip/Tooltip';
import TooltipButton from '@/components/common/Tooltip/AddressTooltip/TooltipButton';

interface AddressTooltipProps {
  roadAddress: string;
  lotAddress: string;
}

export default function AddressTooltip({
  roadAddress,
  lotAddress,
}: AddressTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const setIsVisibleChangeHandler = (visiable: boolean) => {
    setIsVisible(visiable);
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsVisibleChangeHandler(false);
    // TODO: 여기에 복사 완료 알림을 추가해야함.
  };

  const tooltipContent = (
    <div className="space-y-2 text-sm">
      <div>
        <strong className="block mb-1">도로명 주소</strong>
        <div className="flex items-center justify-between">
          <p className="mb-1 mr-2">{roadAddress}</p>
          <TooltipButton
            onClick={() => copyToClipboard(roadAddress)}
            variant="ghost"
            className="flex-shrink-0"
          >
            <FaCopy className="mr-1" /> 복사
          </TooltipButton>
        </div>
      </div>
      <div className="border-t pt-2">
        <strong className="block mb-1">지번 주소</strong>
        <div className="flex items-center justify-between">
          <p className="mr-2">{lotAddress}</p>
          <TooltipButton
            onClick={() => copyToClipboard(lotAddress)}
            variant="ghost"
            className="flex-shrink-0"
          >
            <FaCopy className="mr-1" /> 복사
          </TooltipButton>
        </div>
      </div>
    </div>
  );

  return (
    <Tooltip
      content={tooltipContent}
      setIsVisibleChangeHandler={setIsVisibleChangeHandler}
      isVisible={isVisible}
    >
      <div className="flex items-start cursor-pointer group">
        <FaMapLocation className="h-4 w-4 mr-1 mt-1 flex-shrink-0" />
        <div className="flex-grow mr-1">
          <span className="break-words inline-block transition-colors duration-200">
            {roadAddress}
          </span>
        </div>
        <ChevronDownIcon className="h-4 w-4 flex-shrink-0 mt-1 transition-colors duration-200" />
      </div>
    </Tooltip>
  );
}
