import { Text } from './style';

const BigTitle = ({color, top, left, right, text}) => (
    <Text color={color} top={top} left={left} right={right}>
      {text}
    </Text>
)

export default BigTitle;