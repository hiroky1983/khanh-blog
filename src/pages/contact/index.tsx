import { Button, Select, Textarea, TextInput } from "@mantine/core";
import { NextPage } from "next";
import { ComponentProps } from "react";
import { contentType } from "../../type/type";

export const contact: NextPage = () => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    const data: contentType = {
      name: e.currentTarget.userName.value,
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      discription: e.currentTarget.discription.value,
    };
    console.log(data);
  };
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Your name"
          label="your name"
          name="userName"
          required
          lang="vi,en,ja"
        />
        <TextInput
          placeholder="email address"
          label="email"
          name="email"
          required
          lang="vi,en,ja"
        />
        <Select
          label="subject"
          placeholder="your subject"
          name="subject"
          data={[
            { value: "お仕事の依頼", label: "お仕事の依頼" },
            { value: "ブログの内容について", label: "ブログの内容について" },
            { value: "各種質問", label: "各種質問" },
            { value: "その他", label: "その他" },
          ]}
        />
        <Textarea
          placeholder="Your comment"
          label="Your comment"
          required
          name="discription"
          lang="vi,en,ja"
        />
        <Button
          className="bg-green-500 hover:bg-green-400 rounded-xl mt-4"
          type="submit"
        >
          送信
        </Button>
      </form>
    </div>
  );
};

export default contact;
