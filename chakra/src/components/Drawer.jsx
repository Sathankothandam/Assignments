import React, { useDisclosure } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <button>
      <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </button>
            <button colorScheme="blue">Save</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </button>
  );
}
export default DrawerExample;
