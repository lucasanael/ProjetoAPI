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
const idSeries = "27633"


const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgMorbius = `https://gateway.marvel.com/v1/public/characters/${idMorbius}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgKane = `http://gateway.marvel.com/v1/public/creators/${idKane}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgRoy = `http://gateway.marvel.com/v1/public/creators/${idRoy}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgSeries = `http://gateway.marvel.com/v1/public/series/${idSeries}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;



function Morbius() {

    const [morbius, setMorbius] = useState([])
    const [kane, setKane] = useState([])
    const [roy, setRoy] = useState([])
    const [comic, setComic] = useState([])
    const [series, setSeries] = useState([])

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

        const getSeries = async () => {

            try {
                const reposta = await fetch(imgSeries)
                const data = await reposta.json()
                setSeries(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getSeries()
    }, []);

    return (
        <>
            <div>
                <div className={Styles.banner}>
                    <Link className={Styles.nav} href="/initial"> <Image
                            width={40}
                            height={30}
                            src='/voltarRed.png'
                            alt="Voltar" /></Link>
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
                                    height={300} />
                            </li>
                        ))}
                    </ul></div>
                    <div>
                        <ul className={Styles.ajuste}>
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
                <div className={Styles.creatorTexto}><p>Morbius, o Vampiro Vivo, é um personagem fascinante da Marvel, e sua criação é creditada aos escritores Roy Thomas e o desenhista Gil Kane. A primeira aparição do anti-herói aconteceu em The Amazing Spider-Man #101 em outubro de 1971. Roy Thomas, renomado por suas contribuições significativas ao Universo Marvel, trouxe sua habilidade narrativa única para dar vida a Morbius. Enquanto isso, Gil Kane, um artista talentoso e prolífico, visualizou o design distintivo do personagem, capturando a essência sombria e trágica do Dr. Michael Morbius. A colaboração entre Thomas e Kane resultou em um personagem memorável que se destaca por sua complexidade moral, oscilando entre sua luta contra a sede de sangue e seu desejo de encontrar uma cura para sua condição vampírica. A criação de Morbius pelos talentosos Thomas e Kane contribuiu significativamente para a diversidade de personagens dentro do vasto universo da Marvel Comics.</p></div>

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
                    <p>Até o sexto episódio de Morbius (2019), a série cativa os espectadores com uma trama repleta de reviravoltas e desenvolvimentos intrigantes. A jornada do protagonista, Dr. Michael Morbius, mergulha cada vez mais nas complexidades de sua condição vampírica, enquanto ele lida com dilemas éticos e enfrenta novos desafios sobrenaturais. A narrativa habilmente entrelaça elementos de horror e drama, aprofundando a psicologia do personagem principal. Os fãs são levados a uma montanha-russa emocional, explorando as ramificações de suas escolhas e as consequências inesperadas que permeiam o universo sombrio de Morbius. Este sexto episódio promete manter os espectadores à beira de seus assentos, ansiosos por descobrir o destino do Dr. Morbius em meio a um cenário de tensão crescente.</p>
                </div>

                <div className={Styles.comic}>


                    <div className={Styles.seriesTexto}>
                        <ul>
                            {series.map((series) => (
                                <li key={series.id}>
                                    <Image
                                        src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                                        alt={series.name}
                                        width={400}
                                        height={300} />
                                </li>
                            ))}
                        </ul>
                        <p>Absolute Carnage: Lethal Protectors (2019) mergulha os leitores em um turbilhão de ação e suspense, onde a ameaça simbiótica de Carnificina atinge níveis aterradores. Nesta série eletrizante, personagens icônicos do universo Marvel unem forças para enfrentar o caos desencadeado pelo simbionte insano. A trama intrincada e repleta de reviravoltas mantém os fãs à beira de seus assentos, enquanto a batalha entre o bem e o mal atinge um novo patamar. Com ilustrações vívidas e diálogos afiados, Absolute Carnage: Lethal Protectors se destaca como uma obra que não apenas respeita a mitologia do Homem-Aranha, mas também adiciona camadas intensas à narrativa, fazendo desta uma leitura obrigatória para os amantes dos quadrinhos.</p>
                    </div>
                </div>



            </div>

        </>




    )

}

export default Morbius