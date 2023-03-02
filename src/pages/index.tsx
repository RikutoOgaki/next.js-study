import {useState} from 'react'
import {Box,Text,Flex,Center,Input} from '@chakra-ui/react'

type State = {
  memo:string,
  list:Array<string>
}

export default function Todo(){

  const [state,setState] = useState<State>({
    memo:'',
    list:[]
  })

  return(
    <Box as='div'>
        <Text as={"p"} fontSize={"6rem"}>Hello My Todo page</Text>
        <Input type="text" value={state.memo}
          onChange={(e)=> setState({
            ...state,
            memo:e.target.value
          })}/>
        <p>{state.memo}</p>
    </Box>
  )
}