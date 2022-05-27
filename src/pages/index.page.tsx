import { useRef } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import AvatarBot from '@/components/AvatarBot';
import styles from '@/styles/Home.module.scss';

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>:: Avatar</h2>
            <p>
              <AvatarBot email="dev@nimblehq.co"></AvatarBot>
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Normal Button</h2>
            <p>
              <Button>Button</Button>
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Translucent Button</h2>
            <p>
              <Button colorScheme="translucent">Translucent Button</Button>
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Long Button</h2>
            <p>
              <Button>Looooong Content Button</Button>
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Small Button</h2>
            <p>
              <Button size="sm">Small Button</Button>
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Translucent Button</h2>
            <p>
              <Button colorScheme="translucent" size="sm">
                Translucent Button
              </Button>
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Solid Icon Button</h2>
            <p>
              <IconButton
                variant="circle"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Ghost Icon Button</h2>
            <p>
              <IconButton
                variant="circle-ghost"
                aria-label="Search database"
                icon={<SearchIcon color="white" />}
              />
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Input Field</h2>
            <p>
              <Input placeholder="Placeholder" />
            </p>
          </div>

          <div className={styles.card}>
            <h2>:: Alert Dialog</h2>
            <p>
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
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/images/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
