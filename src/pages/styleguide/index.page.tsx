import { useRef } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  IconButton,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

import AvatarBot from '@/components/AvatarBot';
import FlashToast from '@/components/FlashToast';
import { LayoutDefault } from '@/layouts/index';
import styles from '@/styles/Styleguide.module.scss';

export const styleguideDataTestIds = {
  heading: 'styleguide-heading',
};

const Styleguide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1
          className={styles.title}
          data-test-id={styleguideDataTestIds.heading}
        >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.paragraph}>Styleguide 🌈</p>

        <Box
          py={4}
          w="100%"
          mx="auto"
          sx={{ columnCount: [1, 2, 3], columnGap: '32px' }}
        >
          <div className={styles.card}>
            <h2>:: Avatar</h2>
            <div>
              <AvatarBot email="dev@nimblehq.co"></AvatarBot>
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Normal Button</h2>
            <div>
              <Button>Button</Button>
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Translucent Button</h2>
            <div>
              <Button colorScheme="translucent">Translucent Button</Button>
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Long Button</h2>
            <div>
              <Button>Loooooooooong Button</Button>
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Small Button</h2>
            <div>
              <Button size="sm">Small Button</Button>
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Solid Icon Button</h2>
            <div>
              <IconButton
                variant="circle"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Ghost Icon Button</h2>
            <div>
              <IconButton
                variant="circle-ghost"
                aria-label="Search database"
                icon={<SearchIcon color="white" />}
              />
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Input Field</h2>
            <div>
              <Input placeholder="Placeholder" />
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Alert Dialog</h2>
            <div>
              <Button colorScheme="blue" onClick={onOpen}>
                Open Alert
              </Button>

              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader>Warning!</AlertDialogHeader>

                    <AlertDialogBody>
                      Are you sure you want to quit the survey?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button
                        colorScheme="translucent"
                        size="sm"
                        onClick={onClose}
                      >
                        Yes
                      </Button>
                      <Button
                        size="sm"
                        ref={cancelRef}
                        onClick={onClose}
                        ml={3}
                      >
                        Cancel
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </div>
          </div>

          <div className={styles.card}>
            <h2>:: Flash Toast</h2>
            <div>
              <FlashToast
                title="Error"
                messageList={[
                  'lorem ipsum dolor sit amet',
                  'consectetur adipiscing elit',
                  'integer molestie lorem at massa',
                  'facilisis in pretium nisl aliquet',
                ]}
              />
            </div>
          </div>
        </Box>
      </main>
    </div>
  );
};

Styleguide.getLayout = (page: React.ReactNode) => {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Styleguide;
