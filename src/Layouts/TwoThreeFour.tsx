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
const TwoColumn = () => {
  return (
    <>
      <LeftColumn />
      <RightColumn />
    </>
  );
};
const ThreeColumn = () => {
  return (
    <>
      <LeftColumn />
      <SecondColumn />
      <RightColumn />
    </>
  );
};
const FourColumn = () => {
  return (
    <>
      <LeftColumn />
      <SecondColumn />
      <ThirdColumn />
      <RightColumn />
    </>
  );
};
const Space = () => {
  return (
    <>
      <div className="mt-4"></div>;
    </>
  );
};
const TwoThreeFour = [TwoColumn, Space, ThreeColumn, Space, FourColumn];
export default ColumnLayout(TwoThreeFour);
