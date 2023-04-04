import { Box, Heading, Text } from '../components/base';
import FaStar from 'react-icons/lib/fa/star';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
export default props => {
    console.log(props.data)
    if (props.data.length != 0) {
        return (
            <div>
            {props.data.map(data => (
                <Box>
                    <Box fontSize="12px" color="#e97a25" mb3>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </Box>
                    <Heading is="h6" color="#1d3c64" fontSize="12px" mb2>llkk</Heading>
                    <Text fontSize="12px" mb2>This was our first time ordering, didn&amp;#x27;t know anything about the Elegant Office. It was a pop-up during my search. Glad we took the chance, </Text>
                    <Box fontSize="12px" color="#9c9c9c" bold><Text color='#1d3c64' is="span" bold>DIANE S. -</Text>Fri Sep 29 2017</Box>
                </Box>
                
            )
            
        )}
        </div>
        )
    } else {
        return <div>dds</div>
    }

}