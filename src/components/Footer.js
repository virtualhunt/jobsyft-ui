import {
    Box,
    Text
} from '@chakra-ui/react';
const { FaHeart } = require('react-icons/fa');


export default function Footer() {
    return (
        <Box style={{
            backgroundColor: "#d3e3cf",
            width: "100%",
            height: "2rem"
        }}
        align="center" justifyItems={"center"}>
            <Text style={{
                display: "inline-flex",
                height: "2rem"
            }}
            align="center" justifyItems={"center"}>
            Made with <FaHeart style={{
                marginTop: "5px",
                marginLeft: "5px",
                marginRight: "5px",
                color: "#8c0a0a"
            }}/>
            by JobSyft
            </Text>
        </Box>
    );
}
