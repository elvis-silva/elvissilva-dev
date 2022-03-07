import { Center } from "./style";

const RotateButton = ({click, children}) => (
  <Center click={click}>
    {children}
  </Center>
)

export default RotateButton