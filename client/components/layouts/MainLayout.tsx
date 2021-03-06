import {
    Box,
    Divider,
    Flex,
} from "@chakra-ui/react";

import Navigation from "../Navigation";

type MainLayoutProps = {
    children: React.ReactNode;
};

export function MainLayout({children}: MainLayoutProps) {
    return (
        <Box margin="0 auto">
            <Flex
                justifyContent="center"
                alignItems="center"
                minHeight="300"
                bgImage="url('images/pattern.svg')"
                backgroundPosition="right"
                mb="2em"
            ></Flex>
            <Box margin="0 auto" maxW={1000}>
                <Navigation/>

                <Divider mt={5} mb={5}/>

                {children}
            </Box>
        </Box>
    );
}
