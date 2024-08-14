// src/Components/Modals/ProfileFormModal.jsx
import React from "react";
import { Box, Input, Textarea, Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

const ProfileFormModal = ({ isOpen, onClose }) => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Profile Updated.",
      description: "Your profile information has been updated successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Name" mb={3} />
            <Input placeholder="Age" type="number" mb={3} />
            <Input placeholder="Degree" mb={3} />
            <Input placeholder="University" mb={3} />
            <Input placeholder="Date of Birth" type="date" mb={3} />
            <Input placeholder="Hobby" mb={3} />
            <Textarea placeholder="Skills" mb={3} />
            <Input type="file" mb={3} />
            <Button type="submit" colorScheme="blue">Submit</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProfileFormModal;
