import { Button } from "@/components/ui/button";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileDetails() {
  return (
    <div className="max-w-sm lg:max-w-full">
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-6 lg:gap-4 lg:items-center">
        {/* First container having image and Name with company name */}
        <div className="flex flex-row gap-4 items-center py-4 lg:justify-start lg:col-span-2">
          {/* Image container */}
          <div className="mb-4">
            <img
              src="https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png"
              alt="profileImage"
              className="rounded-full h-15 w-15"
            />
          </div>
          {/* Text container */}
          <div>
            <p className="text-base font-bold">Harikesh Chaturvedi</p>
            <p className="text-sm text-gray-600">
              Company Name: <p className="text-black lg:inline">ShipGlobal Direct</p>{" "}
            </p>
          </div>
        </div>
        {/* Second container having email */}
        <div className="lg:col-span-2">
          <p className="text-sm text-gray-600">Email Id</p>
          <p className="text-sm">Harikesh.chaturvedi@gmail.com</p>
        </div>
        {/* Third container having mobile number */}
        <div>
          <p className="text-sm text-gray-600">Mobile Number</p>
          <p className="text-sm">+91-8829881129</p>
        </div>
        {/* Edit Button */}
        <Button className="text-gray-600 bg-transparent border border-gray-600 font-normal">
          <FontAwesomeIcon icon={faPencil} style={{ color: "#c7c7c7" }} className="mr-2" />
          Edit
        </Button>
      </div>
    </div>
  );
}
