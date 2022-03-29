import { VFC } from "react";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="h-screen">
      <Header />
      <main className="px-4 bg-gray-100 h-full">{children}</main>
    </div>
  );
};
