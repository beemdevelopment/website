const Icon = ({
  icon,
  label,
  href,
  className,
}: {
  icon: any;
  label: string;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:opacity-80 transition"
  >
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className || "w-5 h-5"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  </a>
);

export default Icon;
