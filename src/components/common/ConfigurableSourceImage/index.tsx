import Image from 'next/image';
import type { ImageProps } from 'next/dist/shared/lib/get-img-props';
import { generatePostImageUrl } from '@/utils/generateImageUrl';

interface IConfigurableSourceImageProps extends ImageProps {
  src: string;
  alt: string;
}

export default function ConfigurableSourceImage({
  src,
  alt,
  ...props
}: IConfigurableSourceImageProps) {
  return <Image {...props} src={generatePostImageUrl(src)} alt={alt} />;
}
