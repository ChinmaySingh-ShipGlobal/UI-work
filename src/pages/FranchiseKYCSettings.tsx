import { Card } from "@/components/ui/card";
import LabelWithText from "@/components/elements/LabelWithText";
import LabelWithTextFranchise from "@/components/elements/LabelWithTextFranchise";
import { Link } from "react-router-dom";
import { FilePen } from "lucide-react";

export default function FranchiseKYCSettings() {
  return (
    <>
      <div className="font-semibold text-left">
        <Card className=" border-none shadow-none p-5">
          <form>
            <Card className="px-6 shadow-none border-blue-50 rounded-lg">
              <div className="flex flex-col justify-center text-left lg:grid lg:grid-cols-4 lg:items-center">
                <div className="flex flex-row gap-x-3 items-center py-3 border-b border-b-gray-550 lg:col-span-4">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FFF0F0" />
                    <path
                      d="M22.25 23.75H17.75C17.1533 23.75 16.581 23.9871 16.159 24.409C15.7371 24.831 15.5 25.4033 15.5 26V27.5H17V26C17 25.8011 17.079 25.6103 17.2197 25.4697C17.3603 25.329 17.5511 25.25 17.75 25.25H22.25C22.4489 25.25 22.6397 25.329 22.7803 25.4697C22.921 25.6103 23 25.8011 23 26V27.5H24.5V26C24.5 25.4033 24.2629 24.831 23.841 24.409C23.419 23.9871 22.8467 23.75 22.25 23.75ZM20 23C20.5933 23 21.1734 22.8241 21.6667 22.4944C22.1601 22.1648 22.5446 21.6962 22.7716 21.1481C22.9987 20.5999 23.0581 19.9967 22.9424 19.4147C22.8266 18.8328 22.5409 18.2982 22.1213 17.8787C21.7018 17.4591 21.1672 17.1734 20.5853 17.0576C20.0033 16.9419 19.4001 17.0013 18.8519 17.2284C18.3038 17.4554 17.8352 17.8399 17.5056 18.3333C17.1759 18.8266 17 19.4067 17 20C17 20.7957 17.3161 21.5587 17.8787 22.1213C18.4413 22.6839 19.2044 23 20 23ZM20 18.5C20.2967 18.5 20.5867 18.588 20.8334 18.7528C21.08 18.9176 21.2723 19.1519 21.3858 19.426C21.4994 19.7001 21.5291 20.0017 21.4712 20.2926C21.4133 20.5836 21.2704 20.8509 21.0607 21.0607C20.8509 21.2704 20.5836 21.4133 20.2926 21.4712C20.0017 21.5291 19.7001 21.4994 19.426 21.3858C19.1519 21.2723 18.9176 21.08 18.7528 20.8334C18.588 20.5867 18.5 20.2967 18.5 20C18.5 19.6022 18.658 19.2206 18.9393 18.9393C19.2206 18.658 19.6022 18.5 20 18.5Z"
                      fill="#FC5353"
                      //   className="fill-green-700"
                    />
                    <path
                      d="M26.75 11.75H24.5V11C24.5 10.6022 24.342 10.2206 24.0607 9.93934C23.7794 9.65804 23.3978 9.5 23 9.5H17C16.6022 9.5 16.2206 9.65804 15.9393 9.93934C15.658 10.2206 15.5 10.6022 15.5 11V11.75H13.25C12.8522 11.75 12.4706 11.908 12.1893 12.1893C11.908 12.4706 11.75 12.8522 11.75 13.25V29C11.75 29.3978 11.908 29.7794 12.1893 30.0607C12.4706 30.342 12.8522 30.5 13.25 30.5H26.75C27.1478 30.5 27.5294 30.342 27.8107 30.0607C28.092 29.7794 28.25 29.3978 28.25 29V13.25C28.25 12.8522 28.092 12.4706 27.8107 12.1893C27.5294 11.908 27.1478 11.75 26.75 11.75ZM17 11H23V14H17V11ZM26.75 29H13.25V13.25H15.5V15.5H24.5V13.25H26.75V29Z"
                      fill="#FC5353"
                    />
                  </svg>

                  <p className="text-base font-semibold">Documents</p>
                </div>
                <div className="grid gap-y-4  md:grid-cols-4 md:col-span-4 py-4">
                  <LabelWithTextFranchise
                    title="Aadhar"
                    value="XXXX - XXXX - 5262"
                    valuenextline={
                      <>
                        <Link to="#" className=" hover:cursor-pointer flex flex-row items-center gap-x-2">
                          Download icon
                          {
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 15.577L8.462 12.038L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.538 12.038L12 15.577ZM6.615 19C6.155 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8457 5 17.385V14.962H6V17.385C6 17.5383 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.539 18 17.385V14.962H19V17.385C19 17.845 18.846 18.229 18.538 18.537C18.23 18.845 17.8457 18.9993 17.385 19H6.615Z"
                                fill="#647082"
                              />
                            </svg>
                          }
                        </Link>
                      </>
                    }
                    subValueClass="text-sm font-medium"
                    valuenextlineClass="text-gray-800"
                  />
                  <LabelWithTextFranchise
                    title="GST"
                    value="XXXX - XXXX - 5262"
                    valuenextline={
                      <>
                        <Link to="#" className=" hover:cursor-pointer flex flex-row items-center gap-x-2">
                          Download icon
                          {
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 15.577L8.462 12.038L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.538 12.038L12 15.577ZM6.615 19C6.155 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8457 5 17.385V14.962H6V17.385C6 17.5383 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.539 18 17.385V14.962H19V17.385C19 17.845 18.846 18.229 18.538 18.537C18.23 18.845 17.8457 18.9993 17.385 19H6.615Z"
                                fill="#647082"
                              />
                            </svg>
                          }
                        </Link>
                      </>
                    }
                    subValueClass="text-sm font-medium"
                    valuenextlineClass="text-gray-800"
                  />
                  <LabelWithTextFranchise
                    title="Company PAN"
                    value="XXXX - XXXX - 5262"
                    valuenextline={
                      <>
                        <Link to="#" className=" hover:cursor-pointer flex flex-row items-center gap-x-2">
                          Download icon
                          {
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 15.577L8.462 12.038L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.538 12.038L12 15.577ZM6.615 19C6.155 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8457 5 17.385V14.962H6V17.385C6 17.5383 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.539 18 17.385V14.962H19V17.385C19 17.845 18.846 18.229 18.538 18.537C18.23 18.845 17.8457 18.9993 17.385 19H6.615Z"
                                fill="#647082"
                              />
                            </svg>
                          }
                        </Link>
                      </>
                    }
                    subValueClass="text-sm font-medium"
                    valuenextlineClass="text-gray-800"
                  />

                  <LabelWithTextFranchise
                    title="Signature with Stamp"
                    subValue={<FilePen className="mx-auto" />}
                    valuenextline={
                      <>
                        <Link to="#" className=" hover:cursor-pointer flex flex-row items-center gap-x-2">
                          Download icon
                          {
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 15.577L8.462 12.038L9.169 11.319L11.5 13.65V5H12.5V13.65L14.83 11.32L15.538 12.038L12 15.577ZM6.615 19C6.155 19 5.771 18.846 5.463 18.538C5.155 18.23 5.00067 17.8457 5 17.385V14.962H6V17.385C6 17.5383 6.064 17.6793 6.192 17.808C6.32 17.9367 6.461 18.0007 6.615 18H17.385C17.5383 18 17.6793 17.936 17.808 17.808C17.9367 17.68 18.0007 17.539 18 17.385V14.962H19V17.385C19 17.845 18.846 18.229 18.538 18.537C18.23 18.845 17.8457 18.9993 17.385 19H6.615Z"
                                fill="#647082"
                              />
                            </svg>
                          }
                        </Link>
                      </>
                    }
                    valuenextlineClass="text-gray-800"
                    divClass="lg:mx-auto"
                  />
                </div>
              </div>
            </Card>
            <Card className="px-6 shadow-none border-blue-50 rounded-lg mt-5">
              <div className="flex flex-col justify-center text-left lg:grid lg:grid-cols-6 lg:items-center">
                <div className="flex flex-row gap-x-3 items-center py-3 border-b border-b-gray-550 lg:col-span-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FFF7E8" />
                    <path
                      d="M19.9971 19.499C19.334 19.499 18.6981 19.2356 18.2293 18.7668C17.7605 18.2979 17.4971 17.6621 17.4971 16.999C17.4971 16.336 17.7605 15.7001 18.2293 15.2313C18.6981 14.7624 19.334 14.499 19.9971 14.499C20.6601 14.499 21.296 14.7624 21.7648 15.2313C22.2337 15.7001 22.4971 16.336 22.4971 16.999C22.4971 17.3273 22.4324 17.6524 22.3068 17.9557C22.1811 18.259 21.997 18.5346 21.7648 18.7668C21.5327 18.9989 21.2571 19.1831 20.9538 19.3087C20.6505 19.4344 20.3254 19.499 19.9971 19.499ZM19.9971 9.99902C18.1406 9.99902 16.3601 10.7365 15.0473 12.0493C13.7346 13.362 12.9971 15.1425 12.9971 16.999C12.9971 22.249 19.9971 29.999 19.9971 29.999C19.9971 29.999 26.9971 22.249 26.9971 16.999C26.9971 15.1425 26.2596 13.362 24.9468 12.0493C23.6341 10.7365 21.8536 9.99902 19.9971 9.99902Z"
                      fill="#FF9999"
                    />
                  </svg>

                  <p className="text-base font-semibold">Billing Details</p>
                </div>
                <div className="grid lg:grid-cols-6 lg:col-span-6  grid-cols-2 pt-4 pb-5 gap-x-6 gap-y-4">
                  <LabelWithText title="Legal Name" value="Mukesh Kumar" subValueClass="text-sm font-medium" />
                  <LabelWithText
                    title="Address"
                    value="580, Sector 52, Mahatma Gandhi Road,"
                    subValueClass="text-sm font-medium"
                    divClass="col-span-2 lg:col-span-1"
                  />
                  <LabelWithText title="City" value="Gurgaon" subValueClass="text-sm font-medium" />
                  <LabelWithText title="Pin Code" value="122044" subValueClass="text-sm font-medium" />
                  <LabelWithText title="State" value="Haryana" subValueClass="text-sm font-medium" />
                  <LabelWithText title="Country" value="India" subValueClass="text-sm font-medium" />
                </div>
              </div>
            </Card>
          </form>
        </Card>
      </div>
    </>
  );
}
