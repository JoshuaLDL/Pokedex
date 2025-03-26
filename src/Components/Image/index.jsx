import "./Image.css"

export default function Image({ src, alt, style, onProps }) {
    if (onProps) {
      onProps({ src, alt, style });
    }
  
    return <img src={src} alt={alt} style={style} />;
  }