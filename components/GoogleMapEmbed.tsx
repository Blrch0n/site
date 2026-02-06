interface GoogleMapEmbedProps {
  title?: string;
  height?: number;
  className?: string;
}

export default function GoogleMapEmbed({
  title = "Our Location",
  height = 420,
  className = "",
}: GoogleMapEmbedProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-lg ${className}`}
      style={{ height: `${height}px` }}
    >
      <iframe
        src="https://www.google.com/maps?q=47.920739,106.9661968&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        title={title}
      />
    </div>
  );
}
