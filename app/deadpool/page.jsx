"use client"
import { useEffect, useState } from "react"
import { generationMarvelHash } from '@/lib/ultilists'
import Styles from "@/app/deadpool/deadpool.module.css"
import Link from "next/link"
import Image from "next/image"

const publicKey = 'c11748639905323ed0218fc833d1501c'
const privateKey = 'd378b0b313a9ed4b36b17818ac93f2e4f47eea1c'
const idDeadpool = "1009268"
const idNicieza = "6001"
const idLiefeld = "571"
const idComic = "93037"
const idSeries = "2004"

const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgDeadpool = `http://gateway.marvel.com/v1/public/characters/${idDeadpool}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgNicieza = `http://gateway.marvel.com/v1/public/creators/${idNicieza}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgLiefeld = `http://gateway.marvel.com/v1/public/creators/${idLiefeld}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgSeries = `http://gateway.marvel.com/v1/public/series/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
function Deadpool() {

    const [deadpool, setDeadpool] = useState([])
    const [nicieza, setNicieza] = useState([])
    const [liefeld, setLiefeld] = useState([])
    const [Comic, setComic] = useState([])

    useEffect(() => {

        const getDeadpool = async () => {

            try {
                const reposta = await fetch(imgDeadpool)
                const data = await reposta.json()
                setDeadpool(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getDeadpool ()

        const getNicieza = async () => {

            try {
                const reposta = await fetch(imgNicieza)
                const data = await reposta.json()
                setNicieza(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getNicieza ()

        const getLiefeld = async () => {

            try {
                const reposta = await fetch(imgLiefeld)
                const data = await reposta.json()
                setLiefeld(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getLiefeld ()

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

            <div className={Styles.imgPerfil}>
                <ul>
                    {deadpool.map((deapool) => (
                        <li key={deapool.id}>{deapool.name}
                            <Image
                                src={`${deapool.thumbnail.path}.${deapool.thumbnail.extension}`}
                                alt={deapool.name}
                                width={200}
                                height={200} />
                        </li>
                    ))}
                </ul>
            </div>

            <h1 className={Styles.name}>Gamora</h1>


            <div className={Styles.creator}>

                <div className={Styles.creatorPicture}>
                    <ul>
                        {deadpool.map((deapool) => (
                            <li key={deapool.id}>{deapool.name}
                                <Image
                                    src={`${deapool.thumbnail.path}.${deapool.thumbnail.extension}`}
                                    alt={deapool.name}
                                    width={200}
                                    height={200} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={Styles.creatorTexto}><p>A alienígena de pele verde apareceu pela primeira vez em Strange Tales (1951) #180, publicada em 1975. A publicação tem roteiro e arte assinados por Jim Starlin, criador da personagem. Gamora é filha adotiva de Thanos, que a criou para ser a “mulher mais mortal da Galáxia”. Isso aconteceu após o louco Titã ver os pais da menina serem mortos e todo o povo alienígena Zen-Whoberi ser eliminado da existência. </p></div>

            </div>

            <div className={Styles.comic}>


                <div className={Styles.comicTexto}><ul>
                    {Deadpool.map((deapool) => (
                        <li key={deapool.id}>{deapool.name}
                            <Image
                                src={`${deapool.thumbnail.path}.${deapool.thumbnail.extension}`}
                                alt={deapool.name}
                                width={200}
                                height={200} />
                        </li>
                    ))}
                </ul>
                    <p>OUT OF TIME AND OUT FOR REVENGE! The story continues as we follow GAMORA to the doomed planet that is UBLIEX. Perched on the brink of a black hole, its inhabitants count down the hours to their planet's imminent demise as it is swallowed up by the approaching Singularity. Will Gamora find her revenge among the inhabitants of Ubliex before the black hole consumes them all? Or will the citizens of this world - including a doomsday cult, junkie bounty hunters and a young woman with a tremendous destiny - stop her first?</p></div>

            </div>

        </>
    )
}
export default Deadpool