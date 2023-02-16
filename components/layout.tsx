import { NextComponentType, NextPageContext } from 'next';

type Props = {
  children: React.ReactNode;
};

// TODO: Header, Footer を作ってここに配置する
export const Layout: NextComponentType<NextPageContext, null, Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
