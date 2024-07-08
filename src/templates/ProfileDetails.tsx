import LabelWithText from "@/components/elements/LabelWithText";
import { UserRound } from "lucide-react";
import EditProfile from "./EditProfile";
import { useState } from "react";

export default function ProfileDetails() {
  const [image, setImage] = useState(null);

  const onImageChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setImage(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  const clearImage = () => {
    setImage(null);
  };
  return (
    <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:items-center">
      <div className="flex flex-row gap-4 items-center py-4 justify-between lg:col-span-4">
        <div className="flex flex-row gap-4 items-center">
          {image ? (
            <img src={image} className="h-12 w-12 rounded-full p-1 z-0" />
          ) : (
            <UserRound className="scale-150 rounded-full bg-blue text-white p-1" />
          )}
          <p className="text-base font-bold">Harikesh Chaturvedi</p>
        </div>
        <EditProfile image={image} onImageChange={onImageChange} clearImage={clearImage} />
      </div>
      <LabelWithText title="Company Name" value="ShipGlobal Direct" />
      <LabelWithText title="Email Id" value="Harikesh.chaturvedi@gmail.com" />
      <LabelWithText title="Mobile Number" value="+91-8829881129" />
    </div>
  );
}
