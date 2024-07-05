import BillingCard from "@/templates/BillingCard";
import ProfileCard from "@/templates/ProfileCard";
import { Card } from "@/components/ui/card";

export default function ProfileSettings() {
  return (
    <>
      <div className="font-semibold m-6 text-left">
        <Card className=" border-none shadow-none">
          <form>
            {/* Profile Settings form */}
            <ProfileCard />
            {/* Billing Details */}
            <BillingCard />
          </form>
        </Card>
      </div>
    </>
  );
}
