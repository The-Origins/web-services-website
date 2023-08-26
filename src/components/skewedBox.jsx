import { Box } from "@mui/material";
import {styled} from "@mui/system"

export const SkewedBox = styled(Box)({
    clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)"
})