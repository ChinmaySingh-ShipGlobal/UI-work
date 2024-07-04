import { Card, CardContent } from "@/components/ui/card";
import ProfileDetails from "./ProfileDetails";

export default function ProfileCard() {
  return (
    <>
      <Card>
        <CardContent>
          <ProfileDetails />
        </CardContent>
      </Card>
    </>
  );
}
