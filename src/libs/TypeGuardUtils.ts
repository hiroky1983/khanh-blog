import { contentType } from "../type/type";

const isContact = (item: unknown): item is contentType => {
  const target = item as contentType;

  return (
    "name" in target &&
    typeof target.name === "string" &&
    !!target.name &&
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
