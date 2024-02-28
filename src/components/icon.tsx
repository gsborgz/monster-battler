import Image from 'next/image';

export type IconProps = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  size?: number;
  alt?: string;
}

export default function icon(props: IconProps) {
  return (
    <Image
      className={props.className || ''}
      src={`/icons/${props.src}`}
      alt={props.alt || 'Icon'}
      width={props.size || props.width}
      height={props.size || props.height}
      priority
    />
  );
}