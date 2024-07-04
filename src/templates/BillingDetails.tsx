import { Button } from "@/components/ui/button";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BillingDetails() {
  return (
    <>
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-4 lg:gap-4 lg:items-center">
        {/* First container having image and Name with company name */}
        <div className="flex flex-row gap-4 items-center py-4 lg:justify-start lg:col-span-4">
          {/* Image container */}
          <div className="mb-4">
            <img
              src="https://i.pinimg.com/564x/07/d1/48/07d148b230037229c5a058ebe5abb9e7.jpg"
              alt="profileImage"
              className="rounded-full h-10 w-10"
            />
          </div>
          {/* Text container */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:w-3/4">
            <p className="text-base font-bold">Billing Address</p>
          </div>
          {/* Edit Button */}
          <Button className="text-gray-600 bg-transparent border border-gray-600 font-normal mt-4">
            <FontAwesomeIcon icon={faPencil} style={{ color: "#c7c7c7" }} className="mr-2" />
            Edit
          </Button>
        </div>
        {/* Second container having email */}
        <div className="">
          <p className="text-sm text-gray-600">House Number</p>
          <p className="text-sm">L / 176-B</p>
        </div>
        {/* Third container having mobile number */}
        <div>
          <p className="text-sm text-gray-600">Locality</p>
          <p className="text-sm">New Loco Colony</p>
        </div>
        {/* Second container having email */}
        <div className="lg:col-span-2">
          <p className="text-sm text-gray-600">Landmark</p>
          <p className="text-sm">Railway Colony</p>
        </div>
        {/* Third container having mobile number */}
        <div>
          <p className="text-sm text-gray-600">Pin Code</p>
          <p className="text-sm">228811</p>
        </div>
        {/* Third container having mobile number */}
        <div>
          <p className="text-sm text-gray-600">City</p>
          <p className="text-sm">New Delhi</p>
        </div>
        {/* Second container having email */}
        <div className="">
          <p className="text-sm text-gray-600">State</p>
          <p className="text-sm">Delhi</p>
        </div>
        {/* Third container having mobile number */}
        <div>
          <p className="text-sm text-gray-600">Country</p>
          <p className="text-sm">India</p>
        </div>
      </div>
    </>
  );
}
