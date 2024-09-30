import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import { MainRouter } from "./router";

const App = () => {
  retunr (
    <chakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </chakraProvider>
  );
};

export default App
