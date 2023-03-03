import {useState} from 'react'
import Style from '@/styles/check/index.module.css'
// import {Box,Flex,Center,Text,Input} from '@chakra-ui/react'

// styleの内容をstateで管理する
// 直接cssを当てる



export default function Check(){

    const [state,setState] = useState({
        
    })

    return(
        <div className={Style.check}>
            <input type="checkbox" name="" id="checkbox"/>
        </div>
    )
}