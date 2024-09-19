import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorLogo from "../assets/404.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box>
        <VStack>
          {isRouteErrorResponse(error) ? (
            <>
              <Image
                src={ErrorLogo}
                alt="404"
                boxSize={"md"}
                objectFit={"cover"}
              />
              <Text fontSize={"xx-large"}>Page not found</Text>
            </>
          ) : (
            <Text>Something went wrong</Text>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default ErrorPage;
