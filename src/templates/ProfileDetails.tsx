import TextFieldAndValue from "@/components/elements/TextFieldAndValue";
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
    <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-6 lg:gap-4 lg:items-center">
      <div className="flex flex-row gap-4 items-center py-4 lg:justify-start lg:col-span-2">
        {image ? (
          <img src={image} className="h-12 w-12 rounded-full p-1 z-0" />
        ) : (
          <UserRound className="scale-150 rounded-full bg-blue text-white p-1" />
        )}

        <div>
          <p className="text-base font-bold">Harikesh Chaturvedi</p>
          <p className="text-sm text-gray-600 mt-1">
            Company Name: <p className="text-black inline">ShipGlobal Direct</p>{" "}
          </p>
        </div>
      </div>
      <div className="lg:col-span-2">
        <TextFieldAndValue title="Email Id" value="Harikesh.chaturvedi@gmail.com" />
      </div>
      <TextFieldAndValue title="Mobile number" value="+91-8829881129" />
      <div className="lg:flex lg:justify-end lg:mr-5 xl:ml-18">
        <div className="w-1/2">
          <EditProfile image={image} onImageChange={onImageChange} clearImage={clearImage} />
        </div>
      </div>
    </div>
  );
}
