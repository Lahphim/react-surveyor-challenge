export const layoutAuthenticationTestIds = {
  base: 'layout-authentication',
};

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAuthentication = ({ children }: LayoutProps) => {
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
