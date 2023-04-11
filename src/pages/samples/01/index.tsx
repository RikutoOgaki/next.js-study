import { useState } from "react"

export default function Sample01() {

    const [state, setState] = useState({
        calc: '',
        result: 0
    })

    return (
        <>
            <div>
                <input type="button" value="0" />
                <input type="button" value="1" />
                <input type="button" value="2" />
                <input type="button" value="3" />
                <input type="button" value="4" />
                <input type="button" value="5" />
                <input type="button" value="6" />
                <input type="button" value="7" />
                <input type="button" value="8" />
                <input type="button" value="9" />
            </div>
        </>
    )
}