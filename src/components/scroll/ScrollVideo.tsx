const SRC = '/scroll-bg.mp4';
const POSTER = '/scroll-poster.jpg';

export default function ScrollVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a] pointer-events-none">
      <video
        src={SRC}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.14)_28%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.52)_100%)]" />
    </div>
  );
}
