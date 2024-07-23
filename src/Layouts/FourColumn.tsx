import ColumnLayout from "./ColumnLayout";

const LeftColumn = () => (
  <div className="bg-blue p-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi pariatur enim sit exercitationem quibusdam
    itaque? Ipsa, ratione recusandae? Obcaecati tenetur velit, cupiditate minima fuga quasi sequi libero magni
    reiciendis rem!
  </div>
);

const SecondColumn = () => (
  <div className="bg-red p-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi pariatur enim sit exercitationem quibusdam
    itaque? Ipsa, ratione recusandae? Obcaecati tenetur velit, cupiditate minima fuga quasi sequi libero magni
    reiciendis rem!
  </div>
);
const ThirdColumn = () => (
  <div className="bg-purple p-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi pariatur enim sit exercitationem quibusdam
    itaque? Ipsa, ratione recusandae? Obcaecati tenetur velit, cupiditate minima fuga quasi sequi libero magni
    reiciendis rem!
  </div>
);
const RightColumn = () => (
  <div className="bg-orange p-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi pariatur enim sit exercitationem quibusdam
    itaque? Ipsa, ratione recusandae? Obcaecati tenetur velit, cupiditate minima fuga quasi sequi libero magni
    reiciendis rem!
  </div>
);

export const FourColumn = () => {
  return (
    <>
      <LeftColumn />
      <SecondColumn />
      <ThirdColumn />
      <RightColumn />
    </>
  );
};
export default ColumnLayout([FourColumn]);
