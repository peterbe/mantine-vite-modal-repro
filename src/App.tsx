import type { ReactNode } from "react";
import { AppShell, MantineProvider, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell padding="md" navbar={undefined} header={undefined}>
        <Modal opened={opened} onClose={close} title="Authentication">
          {/* Modal content */}
          SOMETHING IN THE MODAL
        </Modal>
        <Text>Welcome to Mantine!</Text>
        <Group position="center">
          <Button onClick={open}>Open modal</Button>
        </Group>
      </AppShell>
    </MantineProvider>
  );
}
