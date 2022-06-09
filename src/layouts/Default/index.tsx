export const layoutDefaultTestIds = {
  base: 'layout-default',
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="app-content" data-test-id={layoutDefaultTestIds.base}>
        {children}
      </main>
    </>
  );
};

export default LayoutDefault;
