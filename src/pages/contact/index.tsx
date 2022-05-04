import { Button, Select, Textarea, TextInput } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { ComponentProps, useState } from "react";
import { contentType } from "../../type/type";

export const contact: NextPage = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    setIsSending(true);
    e.preventDefault();
    try {
      const data: contentType = {
        userName: e.currentTarget.userName.value,
        email: e.currentTarget.email.value,
        subject: e.currentTarget.subject.value,
        discription: e.currentTarget.discription.value,
      };
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error("送信に失敗しました");
      });
      setIsSending(false);
      router.push("/contact/success");
    } catch (error) {
      console.log(error);
      setIsSending(false);
      router.push("/contact/error");
    }
  };
  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <form onSubmit={handleSubmit} className="grid gap-2">
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
          placeholder="your subject"
          label="subject"
          required
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
          className="bg-green-500 hover:bg-green-400 rounded-md mt-4 w-20"
          type="submit"
          loading={isSending}
        >
          送信
        </Button>
      </form>
    </div>
  );
};

export default contact;
