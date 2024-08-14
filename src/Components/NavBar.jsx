import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../Redux/Actions/userActions";
import { GoHome } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import ProfileForm from "./ProfileForm"; // Ensure this path is correct

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [path, setPath] = useState("");

  const { loginStatus, token } = useSelector((state) => state.UserLogin);

  // Handle user logout
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogoutAction());
  };

  // Update path based on current location
  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <Flex
      w="100%"
      flexWrap="wrap"
      height="auto"
      justify="center"
      alignItems="center"
      textColor="black"
      gap="2"
      py={4}
      px={6}
      bg="#2146C7"
    >
      <Box width="80%" display="flex" justifyContent="space-between" flexWrap="wrap">
        {loginStatus && (
          <Button
            leftIcon={<FaUserAlt />}
            bg="skyblue"
            _hover={{ bg: "lightblue" }}
            onClick={onOpen} // Open the profile form modal
          >
            Profile
          </Button>
        )}

        <Button
          leftIcon={<GoHome />}
          bg={path === "/" ? "yellow" : "skyblue"}
          _hover={{ bg: "lightblue" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>

        {token.role === "user" && (
          <Button
            bg={path === "/userjobspage" ? "yellow" : "skyblue"}
            _hover={{ bg: "lightblue" }}
            onClick={() => navigate("/userjobspage")}
          >
            User Jobs Page
          </Button>
        )}

        {token.role === "user" && (
          <Button
            bg={path === "/userjobsapplied" ? "yellow" : "skyblue"}
            _hover={{ bg: "lightblue" }}
            onClick={() => navigate("/userjobsapplied")}
          >
            Jobs Applied
          </Button>
        )}

        {token.role === "admin" && (
          <Button
            bg={path === "/adminjobform" ? "yellow" : "skyblue"}
            _hover={{ bg: "lightblue" }}
            onClick={() => navigate("/adminjobform")}
          >
            Admin Job Posting
          </Button>
        )}

        {token.role === "admin" && (
          <Button
            bg={path === "/adminjoblisting" ? "yellow" : "skyblue"}
            _hover={{ bg: "lightblue" }}
            onClick={() => navigate("/adminjoblisting")}
          >
            Admin Jobs Page
          </Button>
        )}

        {loginStatus ? (
          <Button
            bg="skyblue"
            _hover={{ bg: "lightblue" }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        ) : (
          <Button
            bg={path === "/login" ? "yellow" : "skyblue"}
            _hover={{ bg: "lightblue" }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}

        {!loginStatus && (
          <Button
            bg={path === "/signup" ? "yellow" : "skyblue"}
            _hover={{ bg: "lightblue" }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </Button>
        )}
      </Box>

      {/* Profile Form Modal */}
      <ProfileForm isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default NavBar;
