interface TextFieldAndValueProps {
  title: string;
  value: string;
  subValue?: string;
}

const LabelWithText: React.FC<TextFieldAndValueProps> = ({ title, value, subValue }) => {
  return (
    <div>
      <p className="text-base font-semibold text-gray-600">{title}</p>
      <p className="text-sm  mt-1">
        {value} <p className="text-black inline">{subValue}</p>
      </p>
    </div>
  );
};

export default LabelWithText;
