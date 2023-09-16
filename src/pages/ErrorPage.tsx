import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  // we call useRouteError to get error obj
  const error = useRouteError();

  return (
    <>
      {/* as children in route will only rendered in the outlet there is no
    NavBar in when error is there so we must add it to the error page component
       This is not the ideal solution*/}
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
