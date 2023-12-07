"use client"

import { useEffect, useState } from "react"
import { generationMarvelHash } from '@/lib/ultilists'
import Image from "next/image"

const publicKey = 'e7ee80fc8ad9b978e46945918fbdec43'
const privateKey = '313f48973c2a27c938e45ea083fd4d4e41964d96'

const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const morbius = `http://gateway.marvel.com/v1/public/characters/1009454?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
const loki = `http://gateway.marvel.com/v1/public/characters/1009407?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
const gamora = `http://gateway.marvel.com/v1/public/characters/1009454?limit=1&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
const viuvaNegra = `http://gateway.marvel.com/v1/public/characters/1009454?limit=1&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
const deadpool = `http://gateway.marvel.com/v1/public/characters/1009454?limit=1&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

const Home = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {

        const getData = async () => {

            try {
                const reposta = await fetch(morbius)
                const data = await reposta.json()
                setCharacters(data.data.results)

            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getData()

        const getData2 = async () => {

            try {
                const reposta = await fetch(loki)
                const data = await reposta.json()
                setCharacters(data.data.results)

            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getData2()
    }, []);

    return (
        <div>
            <h1>Marvel Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        {character.name}
                        <Image
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            width={200}
                            height={200} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
