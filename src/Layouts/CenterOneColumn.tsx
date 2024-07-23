import LayoutHeader from "./LayoutHeader";

interface CenterOnceColumnProps {
  width?: string;
  content?: string;
}
export const CenterOneColumnField: React.FC<CenterOnceColumnProps> = ({ width, content }) => {
  return (
    <div className="bg-green h-screen flex px-8">
      <div className={`bg-blue h-1/2 m-auto overflow-auto ${width}`}>{content}</div>
    </div>
  );
};

export default function CentreOneColumnSmall() {
  return (
    <>
      <LayoutHeader />
      <CenterOneColumnField
        width="w-100"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae quasi omnis ipsa, dolorum fuga cumque consectetur consequuntur ut sapiente dignissimos repellendus exercitationem consequatur, velit et iste aperiam perspiciatis dolorem."
      />
    </>
  );
}
export function CentreOneColumnMedium() {
  return (
    <>
      <LayoutHeader />
      <CenterOneColumnField
        width="w-160"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae quasi omnis ipsa, dolorum fuga cumque consectetur consequuntur ut sapiente dignissimos repellendus exercitationem consequatur, velit et iste aperiam perspiciatis dolorem."
      />
    </>
  );
}
export function CentreOneColumnLarge() {
  return (
    <>
      <LayoutHeader />
      <CenterOneColumnField
        width="w-200"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae quasi omnis ipsa, dolorum fuga cumque consectetur consequuntur ut sapiente dignissimos repellendus exercitationem consequatur, velit et iste aperiam perspiciatis dolorem."
      />
    </>
  );
}
