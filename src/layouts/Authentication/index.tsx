import { useEffect } from 'react';

const layoutClassName = 'layout-authentication';

export const layoutAuthenticationTestIds = {
  base: layoutClassName,
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAuthentication = ({ children }: LayoutProps) => {
  useEffect(() => {
    document.body.classList.add(layoutClassName);
  });

  return (
    <>
      <main
        className="app-content"
        data-test-id={layoutAuthenticationTestIds.base}
      >
        {children}
      </main>
    </>
  );
};

export default LayoutAuthentication;
