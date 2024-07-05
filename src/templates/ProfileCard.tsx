import { Card } from "@/components/ui/card";
import ProfileDetails from "./ProfileDetails";

export default function ProfileCard() {
  return (
    <>
      <Card className="mb-6 px-6">
        <ProfileDetails />
      </Card>
    </>
  );
}
