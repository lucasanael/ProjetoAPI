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

        const getSeries = async () => {

            try {
                const reposta = await fetch(imgComic)
                const data = await reposta.json()
                setComic(data.data.results)
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
                <div className={Styles.creatorTexto}><p>Criado pelo artista/escritor Rob Liefeld e pelo escritor Fabian Nicieza, Deadpool fez sua primeira aparição nas páginas da capa de The New Mutants #98 datada de fevereiro de 1991. De acordo com Nicieza, Liefeld criou o o design visual e o nome do personagem, e o próprio Nicieza criou os maneirismos de fala do personagem. </p></div>

            </div>

            <div className={Styles.comic}>


                <div className={Styles.comicTexto}><ul>
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
                    <p>HEART-BROKEN! Things aren't looking great for Deadpool and his new paramour, Valentine Vuong. You know how it can be in love - you just want to be together, but there is always some secret society of killers that gets in the way and your heart and/or glass arms get shattered.</p></div>
                    <ul>
            {series.map((series) => (
              <li key={series.id}>
                {series.name}
                <Image
                  src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                  alt={series.name}
                  width={200}
                  height={200}
                />
              </li>
            ))}
          </ul>
            </div>

        </>
    )
}
export default Deadpool