import { Heading } from '@chakra-ui/react';

import { LayoutDefault } from '@/layouts/index';

export const dashboardDataTestIds = {
  heading: 'dashboard-heading',
};

const Dashboard = () => {
  return (
    <Heading data-test-id={dashboardDataTestIds.heading}>
      Welcome to dashboard!
    </Heading>
  );
};

Dashboard.getLayout = (page: React.ReactNode) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Dashboard;
