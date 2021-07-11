import './styles.css';

interface CircularButtonProps {
  icon: string;
  name: string;
  href: string;
}
export function CircularButton({ icon, name, href }: CircularButtonProps) {
  return (
    <div className="button-container">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={icon} alt={name} />
      </a>
    </div>
  );
}
