import { Box, Link, Square } from '@chakra-ui/react';

export const cornerLinkTestIds = {
  base: 'corner-link',
  icon: 'corner-link-icon',
};

interface CornerLinkProps {
  href: string;
  title?: string;
  bgColor?: string;
  icon?: string;
  isExternal?: boolean;
}

const CornerLink = ({
  href,
  title = '',
  bgColor = 'white',
  icon = '🔗',
  isExternal = false,
}: CornerLinkProps) => {
  return (
    <Link
      href={href}
      title={title}
      isExternal={isExternal}
      data-test-id={cornerLinkTestIds.base}
    >
      <Square
        position="absolute"
        bottom="0"
        left="0"
        size={20}
        backgroundColor={bgColor}
        borderTopRightRadius="full"
      >
        <Box
          as="span"
          fontSize="2xl"
          marginBottom="-20%"
          marginLeft="-20%"
          data-test-id={cornerLinkTestIds.icon}
        >
          {icon}
        </Box>
      </Square>
    </Link>
  );
};

export default CornerLink;
