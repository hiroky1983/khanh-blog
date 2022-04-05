import { VFC } from "react";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="h-screen text-gray-600">
      <Header />
      <main className="p-8 bg-gray-100 h-full">{children}</main>
    </div>
  );
};
