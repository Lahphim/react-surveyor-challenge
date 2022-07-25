import CornerLink from '@/components/CornerLink';
import Welcome from '@/components/Welcome';
import LayoutDefault from '@/layouts/Default';

const Home = () => {
  return (
    <>
      <Welcome />
      <CornerLink
        href="/styleguide"
        title="Styleguide"
        icon="🎨"
        bgColor="whiteAlpha.350"
      />
    </>
  );
};

Home.getLayout = (page: React.ReactNode) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Home;
