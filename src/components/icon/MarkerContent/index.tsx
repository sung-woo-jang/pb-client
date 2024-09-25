import ReactDOMServer from 'react-dom/server';
import { MdStars } from 'react-icons/md';

interface StyledMarkerProps {
  size?: number;
  color?: string;
  outlineColor?: string;
  outlineWidth?: number;
}

export default function MarkerContent({
  size = 25,
  color = '#FF4136',
  outlineColor = '#ffffff',
  outlineWidth = 1,
}: StyledMarkerProps) {
  return ReactDOMServer.renderToString(
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <filter id="outline">
          <feMorphology
            in="SourceAlpha"
            result="DILATED"
            operator="dilate"
            radius={outlineWidth}
          />
          <feFlood
            floodColor={outlineColor}
            floodOpacity="1"
            result="OUTLINE_COLOR"
          />
          <feComposite
            in="OUTLINE_COLOR"
            in2="DILATED"
            operator="in"
            result="OUTLINE"
          />
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#outline)">
        <MdStars
          size={size}
          color={color}
          style={{
            display: 'block',
          }}
        />
      </g>
    </svg>
  );
}
