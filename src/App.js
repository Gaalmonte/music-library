import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar'

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
            const resData = await response.json()
            console.log(resData)
        }
        fetchData()
    })

    return (
        <div>
            <Searchbar />
            {message}
            <Gallery />
        </div>
    )
}

export default App
