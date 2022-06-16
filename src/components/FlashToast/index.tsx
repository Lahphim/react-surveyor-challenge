import { InfoIcon } from '@chakra-ui/icons';
import { Box, Grid, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { capitalize } from '@/helpers/String';

export const flashToastTestIds = {
  base: 'flash-toast',
  title: 'flash-toast__title',
  list: 'flash-toast__list',
};

interface FlashToastProps {
  title: string;
  messageList: Array<string>;
  mt?: string;
}

const FlashToast = ({ title, messageList, mt }: FlashToastProps) => {
  messageList = messageList.filter(Boolean);

  if (!messageList.length) {
    return null;
  }

  return (
    <Grid
      w="full"
      minW="80"
      p="4"
      mt={mt}
      borderRadius="xl"
      backgroundColor="grayAlpha.700"
      backdropFilter="blur(54.37px)"
      gridColumnGap="4"
      gridTemplateAreas={{
        base: `
          'message-icon message-title'
          'message-icon message-list'
          'message-icon .'
        `,
      }}
      gridTemplateColumns="30px 1fr"
      data-test-id={flashToastTestIds.base}
    >
      <Box
        gridArea="message-icon"
        display="flex"
        w="30px"
        h="30px"
        alignItems="center"
        justifyContent="center"
      >
        <InfoIcon w="6" h="6" color="white" />
      </Box>
      <Text
        gridArea="message-title"
        color="white"
        fontSize="2sm"
        fontWeight="extrabold"
        lineHeight="20px"
        data-test-id={flashToastTestIds.title}
      >
        {capitalize(title)}
      </Text>
      <UnorderedList
        gridArea="message-list"
        color="white"
        fontSize="2xs"
        lineHeight="18px"
        opacity="0.6"
        mt="2"
        data-test-id={flashToastTestIds.list}
      >
        {messageList.map((message, index) => (
          <ListItem key={index}>{capitalize(message)}</ListItem>
        ))}
      </UnorderedList>
    </Grid>
  );
};

export default FlashToast;
