interface IconAndTextProps {
  icon: any;
  text: string;
  onClick?: () => void;
  href?: string;
}

const IconAndText: React.FC<IconAndTextProps> = ({ icon, text, onClick, href }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href || "#"} className="flex flex-row items-center gap-4 hover:text-purple-600" onClick={handleLinkClick}>
      {icon}
      <p>{text}</p>
    </a>
  );
};

export default IconAndText;
