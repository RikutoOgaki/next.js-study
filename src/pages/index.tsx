import {useState} from 'react'
import {Box} from '@chakra-ui/react'

type State = {
  memo:string,
  list:Array<string>
}

export default function Todo(){

  const [state,setState] = useState({
    memo:'',
    list:[]
  })

  return(
    <Box as='div'>
      
    </Box>
  )
}