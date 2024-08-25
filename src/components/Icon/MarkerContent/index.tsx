import ReactDOMServer from 'react-dom/server';
import { FaMapMarker } from 'react-icons/fa';

interface StyledMarkerProps {
  size?: number;
  color?: string;
  outlineColor?: string;
  outlineWidth?: number;
}

export default function MarkerContent({
  size = 20,
  color = '#FF4136',
  outlineColor = '#FFFFFF',
  outlineWidth = 2,
}: StyledMarkerProps) {
  //   TODO: 플픽 카테고리의 그거로 동적으로 바뀌게끔 하던지 아니면 이쁘게
  return ReactDOMServer.renderToString(
    <div
      style={{
        display: 'inline-flex',
        position: 'relative',
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaMapMarker
        size={size}
        color={color}
        style={{
          filter: `drop-shadow(0 0 ${outlineWidth}px ${outlineColor})`,
          position: 'absolute',
          stroke: 'black',
          strokeWidth: '15%',
        }}
      />
      <FaMapMarker
        size={size}
        color={color}
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  );
}
