import BillingCard from "@/templates/BillingCard";
import ProfileCard from "@/templates/ProfileCard";

export default function ProfileSettings() {
  return (
    <>
      <div className=" bg-gray-100">
        <div className="font-semibold text-2xl text-center m-2 lg:text-left lg:ml-6">
          <div className="bg-white">
            <form>
              {/* Profile Settings form */}
              <ProfileCard />
              {/* Billing Details */}
              <BillingCard />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
