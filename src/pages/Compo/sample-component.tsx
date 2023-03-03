import {useState} from 'react'
import {Input,Box,Center,Flex,Text} from '@chakra-ui/react'

type Props ={
    memo:string,
    onRikuto:(v:string) => void
}

type State = {
    memo:string
}

export default function SampleComponent(props:Props){

    const [state,setState] = useState<State>({
        memo:props.memo
    })

    return(
        <Box>
            <Text as={'p'} fontSize={'1.8rem'}>子の内部状態</Text>
            <Input type='text' value={state.memo} w={'30rem'} border={'1px solid #000'}
                onChange={(v)=> setState({
                    ...state,
                    memo:v.target.value
                })}
                onBlur={()=> props.onRikuto(state.memo)}
            ></Input>
        </Box>
    )
}