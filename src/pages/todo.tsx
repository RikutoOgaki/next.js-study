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
        <Flex>
            <Input type="text" value={state.memo}
              onChange={(e)=> setState({
                ...state,
                memo:e.target.value
                })} w={"30rem"}/>

            <Input type="button" value="追加"
              onClick={()=> setState({
                ...state,
                memo:'',
                list: [
                    ...state.list,
                    state.memo
                ]
              })} w={"9rem"}/>
          </Flex>
          
          {state.list.map((v,idx)=>
              <tr key={idx}>
                <td>{idx}</td>
                  <td>
                    <Input type='text' value={v}
                      onChange={(e) => setState({
                        ...state,
                        list: state.list.map((v, udx) => idx === udx ? e.target.value : v)
                      })} />
                  </td>
                  <td>
                    <Input type='button' value='削除' onClick={() => setState({
                      ...state,
                      list: state.list.filter((v, udx) => idx !== udx)
                    })} />
                  </td>
              </tr>)}
    </Box>
  )
}