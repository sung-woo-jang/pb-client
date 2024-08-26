import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import ContentsBox from '@/components/common/ContentsBox';
import Image from 'next/image';
import { FiUpload } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setPlaceImages } from '@/store/slice/postEditor/slice';
import { TiDelete } from 'react-icons/ti';

// TODO: 사진이 10장이 넘어가지 않도록 유효성 검사 추가
export default function AddPicture() {
  const [images, setImages] = useState<Array<{ name: string; url: string }>>(
    []
  );
  const dispatch = useAppDispatch();
  const placeImages = useAppSelector((state) => state.postEditor.placeImages);
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

    const newImagesArray = Array.from(placeImages || []).concat(
      Array.from(files)
    );
    const dataTransfer = new DataTransfer();

    newImagesArray.forEach((file) => {
      dataTransfer.items.add(file);
    });

    dispatch(setPlaceImages(dataTransfer.files));
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPlaceImages = Array.from(placeImages || []);
    newPlaceImages.splice(index, 1);
    const dataTransfer = new DataTransfer();

    newPlaceImages.forEach((file) => {
      dataTransfer.items.add(file);
    });

    dispatch(setPlaceImages(dataTransfer.files));
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
              <TiDelete className="w-4 h-4" />
            </button>
          </div>
        ))}
        {images.length < 10 && (
          <label className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-muted-foreground cursor-pointer">
            <FiUpload className="w-8 h-8 text-muted-foreground" />
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
