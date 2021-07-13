import './styles.css';

interface CircularButtonProps {
  icon: string;
  name: string;
  href: string;
  title: string;
}
export function CircularButton({
  icon,
  name,
  href,
  title,
}: CircularButtonProps) {
  return (
    <div className="button-container" title={title}>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={icon} alt={name} />
      </a>
    </div>
  );
}
