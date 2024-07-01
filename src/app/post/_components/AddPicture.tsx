import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import ContentsBox from '@/components/common/ContentsBox';
import Image from 'next/image';

export default function AddPicture() {
  const [images, setImages] = useState<Array<{ name: string; url: string }>>(
    []
  );
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const newFiles = [];
    const currentImages = images.slice();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split('/')[0] !== 'image') continue;
      if (!currentImages.some((e) => e.name === file.name)) {
        currentImages.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
        newFiles.push(file);
      }
    }
    setImages(currentImages);
  };
  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return (
    <ContentsBox>
      <p className="text-lg font-bold">사진을 추가해 주세요</p>
      <p className="text-sm text-muted-foreground">
        (최대 10개의 이미지를 업로드할 수 있습니다.)
      </p>
      <div className="grid grid-cols-3 gap-4">
        {images.map(({ url, name }, index) => (
          <div key={index} className="relative">
            <Image
              src={url}
              alt={`Image ${name}`}
              width={300}
              height={200}
              className="rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
        {images.length < 10 && (
          <label className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-muted-foreground cursor-pointer">
            <UploadIcon className="w-8 h-8 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">업로드</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
      </div>
    </ContentsBox>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
