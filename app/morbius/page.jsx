"use client"

import { useEffect, useState } from "react"
import { generationMarvelHash } from '@/lib/ultilists'
import Styles from "@/app/morbius/morbius.module.css"
import Link from "next/link"
import Image from "next/image"

const publicKey = "e7ee80fc8ad9b978e46945918fbdec43"
const privateKey = "313f48973c2a27c938e45ea083fd4d4e41964d96"
const idMorbius = "1009454"
const idKane = "148"
const idRoy = "14324"
const idComic = "88924"


const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgMorbius = `https://gateway.marvel.com/v1/public/characters/${idMorbius}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgKane = `http://gateway.marvel.com/v1/public/creators/${idKane}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgRoy = `http://gateway.marvel.com/v1/public/creators/${idRoy}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;



function Morbius() {

    const [morbius, setMorbius] = useState([])
    const [kane, setKane] = useState([])
    const [roy, setRoy] = useState([])
    const [comic, setComic] = useState([])

    useEffect(() => {

        const getMorbius = async () => {

            try {
                const reposta = await fetch(imgMorbius)
                const data = await reposta.json()
                setMorbius(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }

        getMorbius()


        const getKane = async () => {

            try {
                const reposta = await fetch(imgKane)
                const data = await reposta.json()
                setKane(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getKane()


        const getRoy = async () => {

            try {
                const reposta = await fetch(imgRoy)
                const data = await reposta.json()
                setRoy(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getRoy()

        const getComic = async () => {

            try {
                const reposta = await fetch(imgComic)
                const data = await reposta.json()
                setComic(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getComic()
    }, []);

    return (
        <>
            <div>
                <div className={Styles.banner}>
                    <Link className={Styles.nav} href="/initial"><img src='voltarMorbius.png' width={100} height={70} /></Link>
                </div>
                <div className={Styles.faixa}>
                </div>
            </div>

            <div>
                <ul>
                    {morbius.map((morbius) => (
                        <li className={Styles.imgPerfil} key={morbius.id}>{morbius.name}
                            <Image
                                src={`${morbius.thumbnail.path}.${morbius.thumbnail.extension}`}
                                alt={morbius.name}
                                width={300}
                                height={300} />
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className={Styles.name}>Morbius</h1>


            <div className={Styles.creator}>

                <div className={Styles.creatorPicture}>
                    <div><ul>
                        {kane.map((kane) => (
                            <li key={kane.id}>{kane.name}
                                <Image
                                    src={`${kane.thumbnail.path}.${kane.thumbnail.extension}`}
                                    alt={kane.name}
                                    width={200}
                                    height={200} />
                            </li>
                        ))}
                    </ul></div>
                    <div><ul>
                        {roy.map((roy) => (
                            <li key={roy.id}>{roy.name}
                                <Image
                                    src={`${roy.thumbnail.path}.${roy.thumbnail.extension}`}
                                    alt={roy.name}
                                    width={200}
                                    height={200} />
                            </li>
                        ))}
                    </ul></div>
                </div>
                <div className={Styles.creatorTexto}><p>Morbius, o Vampiro Vivo, é um personagem fascinante da Marvel, e sua criação é creditada aos escritores Roy Thomas e o desenhista Gil Kane. A primeira aparição do anti-herói aconteceu em "The Amazing Spider-Man #101" em outubro de 1971. Roy Thomas, renomado por suas contribuições significativas ao Universo Marvel, trouxe sua habilidade narrativa única para dar vida a Morbius. Enquanto isso, Gil Kane, um artista talentoso e prolífico, visualizou o design distintivo do personagem, capturando a essência sombria e trágica do Dr. Michael Morbius. A colaboração entre Thomas e Kane resultou em um personagem memorável que se destaca por sua complexidade moral, oscilando entre sua luta contra a sede de sangue e seu desejo de encontrar uma cura para sua condição vampírica. A criação de Morbius pelos talentosos Thomas e Kane contribuiu significativamente para a diversidade de personagens dentro do vasto universo da Marvel Comics.</p></div>

            </div>

            <div className={Styles.comic}>


                <div className={Styles.comicTexto}>
                    <ul>
                        {comic.map((comic) => (
                            <li key={comic.id}>{comic.name}
                                <Image
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    alt={comic.name}
                                    width={200}
                                    height={310} />
                            </li>
                        ))}
                    </ul>
                    <p>Morbius, o Vampiro Vivo, é um personagem fascinante da Marvel, e sua criação é creditada aos escritores Roy Thomas e o desenhista Gil Kane. A primeira aparição do anti-herói aconteceu em "The Amazing Spider-Man #101" em outubro de 1971. Roy Thomas, renomado por suas contribuições significativas ao Universo Marvel, trouxe sua habilidade narrativa única para dar vida a Morbius. Enquanto isso, Gil Kane, um artista talentoso e prolífico, visualizou o design distintivo do personagem, capturando a essência sombria e trágica do Dr. Michael Morbius. A colaboração entre Thomas e Kane resultou em um personagem memorável que se destaca por sua complexidade moral, oscilando entre sua luta contra a sede de sangue e seu desejo de encontrar uma cura para sua condição vampírica. A criação de Morbius pelos talentosos Thomas e Kane contribuiu significativamente para a diversidade de personagens dentro do vasto universo da Marvel Comics.</p><ul>
                        {comic.map((comic) => (
                            <li key={comic.id}>{comic.name}
                                <Image
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    alt={comic.name}
                                    width={200}
                                    height={310} />
                            </li>
                        ))}
                    </ul></div>

            </div>

        </>




    )

}

export default Morbius