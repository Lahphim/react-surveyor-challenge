import { useEffect } from 'react';

const layoutClassName = 'layout-default';

export const layoutDefaultTestIds = {
  base: layoutClassName,
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  useEffect(() => {
    document.body.classList.add(layoutClassName);
  });

  return (
    <>
      <main className="app-content" data-test-id={layoutDefaultTestIds.base}>
        {children}
      </main>
    </>
  );
};

export default LayoutDefault;
