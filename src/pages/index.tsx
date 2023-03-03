import {Box,Flex,Center,Text,Input} from '@chakra-ui/react'
import Link from 'next/link'

export default function App(){
    return(
        <>
        <Box>
            <Box as='header' w={'100%'} h={'6rem'} bg={'#333'}>
                <Text as={'h1'} fontSize={'4rem'} color={'#fff'} marginLeft={'4rem'}>Next.js template</Text>
            </Box>
            <Box as='main' display={'flex'} justifyContent={'center'}>
                <Box w={'80%'} border={'1px solid #000'} padding={'2rem'} marginTop={'3rem'}>
                    <ul>
                        <li><Link href={'/todo'}>TodoList</Link></li>
                        <li><Link href={'/anime'}>AnimationList</Link></li>
                        <li><Link href={'/Compo'}>CompoList</Link></li>
                    </ul>
                </Box>
            </Box>
            <Box as='footer'>

            </Box>
        </Box>
        </>
    )
}