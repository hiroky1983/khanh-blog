import { contentType } from "../type/type";

const isContact = (item: unknown): item is contentType => {
  const target = item as contentType;

  return (
    "userName" in target &&
    typeof target.userName === "string" &&
    !!target.userName &&
    "email" in target &&
    typeof target.email === "string" &&
    !!target.email &&
    "subject" in target &&
    typeof target.subject === "string" &&
    !!target.subject &&
    "discription" in target &&
    typeof target.discription === "string" &&
    !!target.discription
  );
};

export { isContact };
