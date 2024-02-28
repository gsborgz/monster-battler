import { Type } from '@/models/type';
import { useDictionary } from '@/hooks/dictionary';
import Icon from '@/components/icon';

export type TypeChipProps = {
  type: Type;
  size?: 'xs' | 'sm' | 'md';
  cursor?: string;
  onClick?: () => void;
};

function getTintedColor(color: string, percentage: number) {
  if (color.length > 6) {
    color = color.substring(1, color.length)
  }

  const rgb = parseInt(color, 16);
  let r: number = Math.abs(((rgb >> 16) & 0xFF) + percentage); if (r > 255) r = r - (r - 255);
  let g: number = Math.abs(((rgb >> 8) & 0xFF) + percentage); if (g > 255) g = g - (g - 255);
  let b: number = Math.abs((rgb & 0xFF) + percentage); if (b > 255) b = b - (b - 255);
  let rs = Number(r < 0 || isNaN(r)) ? '0' : ((r > 255) ? 255 : r).toString(16);
  let gs = Number(g < 0 || isNaN(g)) ? '0' : ((g > 255) ? 255 : g).toString(16);
  let bs = Number(b < 0 || isNaN(b)) ? '0' : ((b > 255) ? 255 : b).toString(16);

  if (rs.length == 1) {
    rs = '0' + rs
  };

  if (gs.length == 1) {
    gs = '0' + gs
  };

  if (bs.length == 1) {
    bs = '0' + bs
  };

  return "#" + rs + gs + bs;
}

export default function TypeChip(props: TypeChipProps) {
  const { locale } = useDictionary();
  const backgroundColor = getTintedColor(props.type.color, -25);
  const borderColor = props.type.color;

  const smallCard = (
    <div
      className={`flex items-center justify-center font-bold w-40 p-4 rounded-lg shadow-lg cursor-${props.cursor || 'default'} select-none border-l-4 border-b-4`}
      style={{ backgroundColor, borderColor }}
      onClick={props.onClick}
    >
      <Icon
        src={`${props.type.name}.svg`}
        className='absolute left-4 top-[50%] translate-y-[-50%]'
        size={24}
      />
    </div>
  );
  const mediumCard = (
    <div
      className={`relative text-center text-xs font-bold w-40 p-4 rounded-lg shadow-lg cursor-${props.cursor || 'default'} select-none border-l-4 border-b-4`}
      style={{ backgroundColor, borderColor }}
      onClick={props.onClick}
    >
      <Icon
        src={`${props.type.name}.svg`}
        className='absolute left-4 top-[50%] translate-y-[-50%]'
        size={24}
      />

      <span className='drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.5)]'>
        {(locale(`type.${props.type.name}.name`)).toUpperCase()}
      </span>
    </div>
  );
  const largeCard = (
    <div
      className={`relative text-center text-lg font-bold w-56 p-4 rounded-xl shadow-lg cursor-${props.cursor || 'default'} select-none border-l-6 border-b-6`}
      style={{ backgroundColor, borderColor }}
      onClick={props.onClick}
    >
      <Icon
        src={`${props.type.name}.svg`}
        className='absolute left-4 top-[50%] translate-y-[-50%]'
        size={24}
      />

      <span className='flex-grow text-center drop-shadow-[${props.type.color}]'>
        {(locale(`type.${props.type.name}.name`)).toUpperCase()}
      </span>
    </div>
  );

  switch (props.size) {
    case 'xs':
      return smallCard;
    case 'sm':
      return mediumCard;
    default:
      return largeCard;
  }
}
