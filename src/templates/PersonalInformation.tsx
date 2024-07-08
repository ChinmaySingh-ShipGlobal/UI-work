import InputWithLabel from "@/components/elements/InputWithLabel";
import InputWithTagLeft from "@/components/elements/InputWithTagLeft";

export default function PersonalInformation() {
  return (
    <>
      <div className="flex flex-col justify-center py-4 gap-y-4 text-left lg:grid lg:grid-cols-3 lg:gap-x-16 lg:items-center">
        <div className="flex flex-row gap-4 items-center  justify-between lg:col-span-3">
          <p className="text-lg font-bold">Personal Information</p>
        </div>
        <InputWithLabel label="Address Nick Name" type="text" placeholder="Type here ..." />
        <InputWithLabel label="First Name" type="text" placeholder="Type here ..." />
        <InputWithLabel label="Last Name" type="text" placeholder="Type here ..." />
        <InputWithLabel label="Email Id" bracketLabel="(Optional)" type="email" placeholder="Type here ..." />
        <InputWithTagLeft tag="+91" title="Mobile Number" placeholder="Type here ..." classNameDiv="lg:mt-1" />
      </div>
    </>
  );
}
