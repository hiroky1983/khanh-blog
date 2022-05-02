import { Button, Select, Textarea, TextInput } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { ComponentProps } from "react";
import { contentType } from "../../type/type";

export const contact: NextPage = () => {
  const router = useRouter();
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    try {
      const data: contentType = {
        name: e.currentTarget.userName.value,
        email: e.currentTarget.email.value,
        subject: e.currentTarget.subject.value,
        discription: e.currentTarget.discription.value,
      };

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error("送信に失敗しました");
      });
      // if (!fetcher.ok) {
      //   throw new Error("送信に失敗しました");
      // }
      router.push("/contact/success");
    } catch (error) {
      console.log(error);
      router.push("/contact/error");
    }
  };
  return (
    <div className="w-2/3 mx-auto">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Your name" //
          label="your name" //
          name="userName"
          required
          lang="vi,en,ja"
        />
        <TextInput
          placeholder="email address" //
          label="email" //
          name="email"
          required
          lang="vi,en,ja"
        />
        <Select
          label="subject"
          placeholder="your subject"
          name="subject"
          data={[
            { value: "お仕事の依頼", label: "お仕事の依頼" }, //
            { value: "ブログの内容について", label: "ブログの内容について" }, //
            { value: "各種質問", label: "各種質問" }, //
            { value: "その他", label: "その他" }, //
          ]}
        />
        <Textarea
          placeholder="Your comment" //
          label="Your comment" //
          required
          name="discription"
          lang="vi,en,ja"
          autosize
          minRows={4}
          maxRows={6}
        />
        <Button
          className="bg-green-500 hover:bg-green-400 rounded-md mt-4"
          type="submit"
        >
          送信
        </Button>
      </form>
    </div>
  );
};

export default contact;
