import {useState} from 'react'
import Style from '@/styles/respons/index.module.css'

export default function Respons(){
    return(

        <div>
            <div>
                <header className={Style.head}>
                    <h1 className={Style.title}>Respons対応ページ</h1>
                </header>
                <main>
                    <div>
                        <figure>
                            <img src="/img/01.jpg" alt="hosi" />
                        </figure>
                    </div>
                </main>
                <footer>
                    
                </footer>
            </div>
        </div>
    )
}