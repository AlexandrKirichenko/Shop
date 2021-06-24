import {useState, useEffect} from 'react'

import { Preloader } from '../components/Preloader'
import { GoodsList } from '../components/GoodsList'

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function getGoods(){
        fetch('http://localhost:8000/goods')
            .then(response => response.json())
            .then((goods) => {
                goods && setGoods(goods)
                console.log(goods)
                setLoading(false)
            })
    },[])

    return (
        <main className='container content'>
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </main>
    )
}

export {Shop}