import Samples from './sample-component'
import {useState} from 'react'
import {Flex,Box,Center,Input,Text} from '@chakra-ui/react'

type Sample = {
    memo:string
}

export default function App(){

const [state,setState] = useState<Sample>({
    memo:'ECCコンピューター専門学校'
    })

    return(
    <Box>
        <Text as={'h1'} fontSize={"12rem"}>hello</Text>
        <Text as={'p'} fontSize={'2rem'}>親の内部状態={state.memo}</Text>
        <Samples memo={state.memo}
            onRikuto={(v)=> setState({
                ...state,
                memo:v
            })}
        />
    </Box>
    )
    }