import React, { useState } from 'react';
import { Box, Input, Textarea, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel } from '@chakra-ui/react';

const ProfileForm = ({ isOpen, onClose }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    degree: '',
    university: '',
    dob: '',
    hobby: '',
    skills: '',
    resume: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Submit form data to the server
    try {
      const response = await fetch('/api/profile', { // Update URL to your API endpoint
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        // Handle successful response
        console.log('Profile updated successfully!');
        onClose(); // Close the modal on success
      } else {
        // Handle errors
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl mb={3}>
              <FormLabel>Name</FormLabel>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
              />
            </FormControl>
            
            <FormControl mb={3}>
              <FormLabel>Age</FormLabel>
              <Input 
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age" 
              />
            </FormControl>
            
            <FormControl mb={3}>
              <FormLabel>Degree</FormLabel>
              <Input 
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Degree" 
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>University</FormLabel>
              <Input 
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="University" 
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Date of Birth</FormLabel>
              <Input 
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Hobby</FormLabel>
              <Input 
                name="hobby"
                value={formData.hobby}
                onChange={handleChange}
                placeholder="Hobby" 
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Skills</FormLabel>
              <Textarea 
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Skills" 
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel>Resume</FormLabel>
              <Input 
                name="resume"
                type="file"
                onChange={handleChange}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue">Submit</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProfileForm;
