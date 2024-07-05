import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function EditButton() {
  return (
    <>
      <Button className="text-gray-600 bg-transparent border border-gray-600 font-normal">
        <FontAwesomeIcon icon={faPencil} style={{ color: "#c7c7c7" }} className="mr-2" />
        Edit
      </Button>
    </>
  );
}
