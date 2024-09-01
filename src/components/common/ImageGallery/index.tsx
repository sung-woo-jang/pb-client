import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { generatePostImageUrl } from '@/utils/generateImageUrl';

interface ImageData {
  id: number;
  image_path: string;
}

interface ThumbnailProps {
  image: ImageData;
  onClick: () => void;
  showOverlay?: boolean;
  overlayText?: string;
}

function Thumbnail({
  image,
  onClick,
  showOverlay = false,
  overlayText,
}: ThumbnailProps) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="relative w-48 h-48">
        {/*TODO: 사진 크기 설정법 찾기*/}
        <Image
          src={generatePostImageUrl(image.image_path)}
          layout="fill"
          objectFit="cover"
          alt="Thumbnail"
          className="rounded-md"
        />
        {showOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-md">
            <span className="text-white text-lg font-bold">{overlayText}</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface ThumbnailGridProps {
  images: ImageData[];
  maxThumbnails: number;
  onOpenGallery: (index: number) => void;
}

function ThumbnailGrid({
  images,
  maxThumbnails,
  onOpenGallery,
}: ThumbnailGridProps) {
  const visibleThumbnails = images.slice(0, maxThumbnails);
  const remainingCount = images.length - maxThumbnails;

  return (
    <div className="flex space-x-2">
      {visibleThumbnails.map((image, index) => (
        <Thumbnail
          key={image.id}
          image={image}
          onClick={() => onOpenGallery(index)}
          showOverlay={index === maxThumbnails - 1 && remainingCount > 0}
          overlayText={remainingCount > 0 ? `+${remainingCount}` : undefined}
        />
      ))}
    </div>
  );
}

interface GalleryModalProps {
  images: ImageData[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function GalleryModal({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'Escape') onClose();
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.addEventListener('keydown', handleKeyDown);
      containerElement.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('keydown', handleKeyDown);
        containerElement.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  }, [onNext, onPrev, onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    >
      <div ref={modalRef} className="relative w-full max-w-4xl mx-auto">
        <Image
          src={generatePostImageUrl(images[currentIndex].image_path)}
          alt={`Image ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
          aria-label="Previous image"
        >
          <FaCircleChevronLeft size={36} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
          aria-label="Next image"
        >
          <FaCircleChevronRight size={36} />
        </button>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-700 hover:text-gray-500 transition-colors duration-200 focus:outline-none"
          aria-label="Close gallery"
        >
          <IoIosCloseCircle size={24} />
        </button>
      </div>
    </div>
  );
}

interface ImageGalleryProps {
  images: ImageData[];
  maxThumbnails: number;
}

function ImageGallery({ images, maxThumbnails }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = useCallback((index: number) => {
    setIsOpen(true);
    setCurrentIndex(index);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  return (
    <>
      <ThumbnailGrid
        images={images}
        maxThumbnails={maxThumbnails}
        onOpenGallery={openGallery}
      />
      {isOpen && (
        <GalleryModal
          images={images}
          currentIndex={currentIndex}
          onClose={closeGallery}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}

export default ImageGallery;
