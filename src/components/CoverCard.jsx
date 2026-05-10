export default function CoverCard({ name, image }) {
  return (
    <div className="group relative overflow-hidden rounded-lg ring-1 ring-white/10 bg-neutral-800">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="w-full aspect-video" />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <p className="absolute bottom-0 left-0 right-0 px-3 py-2 font-semibold text-white text-sm">
        {name}
      </p>
    </div>
  );
}
