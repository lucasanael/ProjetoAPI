"use client"

import { useEffect, useState } from "react"
import { generationMarvelHash } from '@/lib/ultilists'
import Styles from "@/app/loki/loki.module.css"
import Link from "next/link"
import Image from "next/image"

const publicKey = "e7ee80fc8ad9b978e46945918fbdec43"
const privateKey = "313f48973c2a27c938e45ea083fd4d4e41964d96"
const idLoki = "1009407"
const idLee = "30"
const idKirby = "196"
const idLieber = "945"
const idComic = "109004"
const idSeries ="16450"




const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgLoki = `https://gateway.marvel.com/v1/public/characters/${idLoki}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgLee = `http://gateway.marvel.com/v1/public/creators/${idLee}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgKirby = `http://gateway.marvel.com/v1/public/creators/${idKirby}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgLieber = `http://gateway.marvel.com/v1/public/creators/${idLieber}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgSeries = `http://gateway.marvel.com/v1/public/series/${idSeries}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;



function Loki() {

    const [loki, setLoki] = useState([])
    const [lee, setLee] = useState([])
    const [kirby, setKirby] = useState([])
    const [lieber, setLieber] = useState([])
    const [comic, setComic] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {

        const getLoki = async () => {

            try {
                const reposta = await fetch(imgLoki)
                const data = await reposta.json()
                setLoki(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }

        getLoki()


        const getlee = async () => {

            try {
                const reposta = await fetch(imgLee)
                const data = await reposta.json()
                setLee(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getlee()


        const getkirby = async () => {

            try {
                const reposta = await fetch(imgKirby)
                const data = await reposta.json()
                setKirby(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getkirby()

        const getlieber = async () => {

            try {
                const reposta = await fetch(imgLieber)
                const data = await reposta.json()
                setLieber(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getlieber()

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
                    {loki.map((loki) => (
                        <li className={Styles.imgPerfil} key={loki.id}>{loki.name}
                            <Image
                                src={`${loki.thumbnail.path}.${loki.thumbnail.extension}`}
                                alt={loki.name}
                                width={300}
                                height={300} />
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className={Styles.name}>Loki</h1>


            <div className={Styles.creator}>

                <div className={Styles.creatorPicture}>
                    <div><ul>
                        {lee.map((lee) => (
                            <li key={lee.id}>{lee.name}
                                <Image
                                    src={`${lee.thumbnail.path}.${lee.thumbnail.extension}`}
                                    alt={lee.name}
                                    width={200}
                                    height={300} />
                            </li>
                        ))}
                    </ul></div>
                    <div><ul>
                        {kirby.map((kirby) => (
                            <li key={kirby.id}>{kirby.name}
                                <Image
                                    src={`${kirby.thumbnail.path}.${kirby.thumbnail.extension}`}
                                    alt={kirby.name}
                                    width={200}
                                    height={300} />
                            </li>
                        ))}
                    </ul></div>
                    <div>
                        <ul>
                        {lieber.map((lieber) => (
                            <li key={lieber.id}>{kirby.lieber}
                                <Image
                                    src={`${lieber.thumbnail.path}.${lieber.thumbnail.extension}`}
                                    alt={lieber.name}
                                    width={200}
                                    height={300} />
                            </li>
                        ))}
                    </ul></div>
                </div>
                <div className={Styles.creatorTexto}><p>Dentro das histórias em quadrinho, a origem do Loki nos é apresentada quando ele ainda era um bebê. Filho de gigantes de gelo, Loki é encontrado sozinho por Odin, que resolve levá-lo consigo como forma de procurar manter as boas relações entre os dois povos, que estavam em guerra.

                    Isto faz com que o personagem seja criado por Frigga e pelo Pai de Todos como um verdadeiro filho, e é justamente nisso que o Loki acredita, até descobrir toda a verdade.  Foi o primeiro vilão em busca do Tesseract a invadir a Terra e desafiar o pequeno grupo composto de pessoas com poderes e habilidades duvidosas. Criado por Stan Lee, reconhecido mundialmente como o co-criador de muitos dos icônicos super-heróis da Marvel Comics, como Homem-Aranha, X-Men, Homem de Ferro e Os Vingadores. O personagem Loki também foi criado pelo
                    Larry Lieber é o irmão mais novo de Stan Lee, o popular editor de inúmeros super-heróis da editora Marvel. Lieber estudou arte no Pratt Art Institute e na Art Students League. Após os estudos, passou quatro anos na Força Aérea, antes de ingressar no mundo dos quadrinhos.</p></div>

            </div>

            <div className={Styles.comic}>


                <div className={Styles.comicTexto}>
                    <ul>
                        {comic.map((comic) => (
                            <li key={comic.id}>
                                <Image
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    alt={comic.name}
                                    width={200}
                                    height={310} />
                            </li>
                        ))}
                    </ul>
                    <p>Loki nasceu em Jotunheim como o filho do rei dos Gigantes de Gelo, Laufey. Pequeno e fraco para um Gigante de Gelo, loki foi abandonado por seu pai em um templo, onde era esperado que ele morresse. Em 965 a.C., pouco depois da guerra entre os Gigantes e os asgardianos, loki foi encontrado pelo rei Odin.</p>
                </div>
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
                    <p>A série A+X (2012-2014) proporcionou aos fãs da Marvel uma experiência única ao unir alguns dos super-heróis mais icônicos em histórias empolgantes e inesperadas. A fórmula de combinar personagens de diferentes equipes, como Vingadores e X-Men, resultou em narrativas dinâmicas e surpreendentes. Cada edição apresentava uma dupla improvável de heróis, explorando suas interações e habilidades em conjunto, criando momentos memoráveis e emocionantes. Com uma abordagem que mesclava ação intensa, humor e um toque de camaradagem, A+X cativou os leitores, oferecendo uma perspectiva única sobre a rica tapeçaria do universo Marvel.</p>
                </div>
            </div>

        </>




    )

}

export default Loki