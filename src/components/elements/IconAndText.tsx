interface IconandTextProps {
  icon: any;
  text: string;
}

const IconAndText: React.FC<IconandTextProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      {icon}
      <p>{text}</p>
    </div>
  );
};
export default IconAndText;
