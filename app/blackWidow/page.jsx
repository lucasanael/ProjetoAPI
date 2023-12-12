"use client"

import { useEffect, useState } from "react"
import { generationMarvelHash } from '@/lib/ultilists'
import Styles from "@/app/blackWidow/blackWidow.module.css"
import Link from "next/link"
import Image from "next/image"


const publicKey = "80c60e1770fce6800c10d913c59bb2de"
const privateKey = "276dd8f4fee5669656c1f150cab0a16186b6b210"
const idWidow = "1009189"
const idLee = "30"
const idHeck = "305"
const idRico = "1447"
const idComic = "93021"
const idSeries = "17318"

const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgWidow = `http://gateway.marvel.com/v1/public/characters/${idWidow}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgLee = `http://gateway.marvel.com/v1/public/creators/${idLee}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgHeck = `http://gateway.marvel.com/v1/public/creators/${idHeck}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash};`
const imgRico = `http://gateway.marvel.com/v1/public/creators/${idRico}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash};`
const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgSeries = `http://gateway.marvel.com/v1/public/series/${idSeries}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

function Widow() {

    const [widow, setWidow] = useState([])
    const [lee, setLee] = useState([])
    const [heck, setHeck] = useState([])
    const [rico, setRico] = useState([])
    const [comic, setComic] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {

        const getWidow = async () => {
            try {
                const resposta = await fetch(imgWidow)
                const data = await resposta.json()
                setWidow(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getWidow()

        const getLee = async () => {
            try {
                const resposta = await fetch(imgLee)
                const data = await resposta.json()
                setLee(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getLee()

        const getHeck = async () => {
            try {
                const resposta = await fetch(imgHeck)
                const data = await resposta.json()
                setHeck(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getHeck()

        const getRico = async () => {
            try {
                const resposta = await fetch(imgRico)
                const data = await resposta.json()
                setRico(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getRico()

        const getSeries = async () => {
            try {
                const resposta = await fetch(imgSeries)
                const data = await resposta.json()
                setSeries(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getSeries()

        const getComic = async () => {
            try {
                const resposta = await fetch(imgComic)
                const data = await resposta.json()
                setComic(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getComic()

    }, []);

    return (
        <>
            <div>
                <div className={Styles.banner}>
                    <Link className={Styles.nav} href="/initial">
                        <Image
                            width={30}
                            height={30}
                            src='/voltarBranco.png'
                            alt="Voltar" /></Link>
                </div>
                <div className={Styles.faixa}>
                </div>
            </div>

            <div>
                <ul>
                    {widow.map((widow) => (
                        <li className={Styles.imgPerfil} key={widow.id}>{widow.name}
                            <Image
                                src={`${widow.thumbnail.path}.${widow.thumbnail.extension}`}
                                alt={widow.name}
                                width={300}
                                height={300} />
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className={Styles.name}>Black-Widow</h1>

            <div className={Styles.creator}>
                <div className={Styles.creatorPicture}>
                    <div>
                        <ul>
                            {lee.map((lee) => (
                                <li key={lee.id}>{lee.name}
                                    <Image

                                        src={`${lee.thumbnail.path}.${lee.thumbnail.extension}`}
                                        alt={lee.name}
                                        width={200}

                                        height={300}



                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ul>
                            {heck.map((heck) => (
                                <li key={heck.id}>{heck.name}
                                    <Image
                                        src={`${heck.thumbnail.path}.${heck.thumbnail.extension}`}
                                        alt={heck.name}
                                        width={200}
                                        height={300} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ul>
                            {rico.map((rico) => (
                                <li key={rico.id}>{rico.name}
                                    <Image
                                        src={`${rico.thumbnail.path}.${rico.thumbnail.extension}`}
                                        alt={rico.name}
                                        width={200}
                                        height={300} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={Styles.creatorTexto}>
                    <p>Stan Lee e Don Heck, são figuras significativas na indústria de quadrinhos. Stan Lee (1922-2018) foi escritor, editor, editor-chefe e presidente da Marvel Comics, e criou muitos personagens icônicos embora não tenha sido o criador original da Viúva Negra. Don Heck (1929-1995) foi um prolífico artista de quadrinhos e co-criador da Viúva Negra, junto com o escritor Don Rico. Heck desempenhou um papel crucial na visualização inicial da personagem e em várias histórias envolvendo a Viúva Negra nas primeiras décadas da Marvel Comics.</p>
                </div>
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
                                    height={300} />
                            </li>
                        ))}
                    </ul>
                    <p>A Viúva Negra e sua equipe descobrem a origem dos poderes do Olio – e o destino sombrio daqueles que são escravos do Apogee, incluindo a protegida de Natasha, Lucy, cujo tempo está se esgotando. Natasha e Apogee se enfrentam pelo futuro de São Francisco, mas Natasha arriscará tudo para proteger sua cidade e a nova vida que construiu lá.</p>
                </div>
            </div>

            <div className={Styles.comic}>
                <div className={Styles.seriesTexto}>
                    <ul>
                        {series.map((series) => (
                            <li key={series.id}>{series.name}
                                <Image
                                    src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                                    alt={series.name}
                                    width={400}
                                    height={300} />
                            </li>
                        ))}
                    </ul>
                    <p>"Vingadores: A Era de Ultron" (2013) é um épico cinematográfico que faz parte do Universo Cinematográfico da Marvel (MCU). Dirigido por Joss Whedon, o filme mergulha os espectadores em um confronto épico entre os Vingadores e um inimigo inesperado, Ultron. Tony Stark, interpretado por Robert Downey Jr., inadvertidamente desencadeia uma ameaça tecnológica autônoma ao criar Ultron, um programa de inteligência artificial destinado a proteger a Terra. No entanto, Ultron, personificado pela voz envolvente de James Spader, se torna uma ameaça global com a intenção de exterminar a humanidade para salvar o planeta. </p>
                </div>
            </div>

        </>
    )
}

export default Widow;
