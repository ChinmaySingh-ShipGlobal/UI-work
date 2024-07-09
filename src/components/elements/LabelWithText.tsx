interface TextFieldAndValueProps {
  title: string;
  value: string;
  subValue?: string;
  divClass?: string;
}

const LabelWithText: React.FC<TextFieldAndValueProps> = ({ title, value, subValue, divClass }) => {
  return (
    <div className={divClass}>
      <p className="text-xs font-normal font-poppins text-gray-800">{title}</p>
      <p className="text-xs  mt-1 font-normal font-poppins">
        {value} <p className="text-black inline">{subValue}</p>
      </p>
    </div>
  );
};

export default LabelWithText;
