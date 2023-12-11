"use client"

import { useEffect, useState } from "react"
import { generationMarvelHash } from "@/lib/ultilists"
import Styles from "@/app/loki/loki.module.css"
import Link from "next/link"
import Image from "next/image"


const publicKey = "35d7abe27965decf3fb223840748e9fd"
const privateKey = "34d9bf2eb6fc21fcbc781b297abc43e3dd06ea13"
const idloki = "1009407"
const idCriador = "30"
const idComic = "97125"

const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgloki = `http://gateway.marvel.com/v1/public/characters/${idloki}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash};`
const imgCriador = `http://gateway.marvel.com/v1/public/creators/${idCriador}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash};`
const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash};`

function Loki() {

    const [loki, setloki] = useState([])
    const [criador, setCriador] = useState([])
    const [comic, setComic] = useState([])
   

    useEffect(() => {

        const getloki = async () => {

            try {
                const reposta = await fetch(imgloki)
                const data = await reposta.json()
                setloki(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getloki()
 

        const getCriador = async () => {

            try {
                const reposta = await fetch(imgCriador)
                const data = await reposta.json()
                setCriador(data.data.results)
            }
            catch (error) {

                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getCriador()
   
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
                    {loki.map((loki) => (
                        <li key={loki.id}>{loki.name}
                            <Image
                            src={`${loki.thumbnail.path}.${loki.thumbnail.extension}`}
                            alt={loki.name}
                            width={200}
                            height={200}/>
                        </li>
                    ))}
                </ul>
            </div>
            
            <h1 className={Styles.name}>loki</h1>


            <div className={Styles.creator}>

                <div className={Styles.creatorPicture}>
                    
                <ul>
                    {criador.map((criador) => (
                        <li key={criador.id}>{criador.name}
                            <Image
                                src={`${criador.thumbnail.path}.${criador.thumbnail.extension}`}
                                alt={criador.name}
                                width={200}
                                height={200} />
                        </li>
                    ))}
                </ul>

                </div>
                <div className={Styles.creatorTexto}><p> Dentro das histórias em quadrinho, a origem do Loki nos é apresentada quando ele ainda era um bebê. Filho de gigantes de gelo, Loki é encontrado sozinho por Odin, que resolve levá-lo consigo como forma de procurar manter as boas relações entre os dois povos, que estavam em guerra.

Isto faz com que o personagem seja criado por Frigga e pelo Pai de Todos como um verdadeiro filho, e é justamente nisso que o Loki acredita, até descobrir toda a verdade.  Foi o primeiro vilão em busca do Tesseract a invadir a Terra e desafiar o pequeno grupo composto de pessoas com poderes e habilidades duvidosas. Criado por Stan Lee, reconhecido mundialmente como o co-criador de muitos dos icônicos super-heróis da Marvel Comics, como Homem-Aranha, X-Men, Homem de Ferro e Os Vingadores. O personagem Loki também foi criado pelo 
Larry Lieber é o irmão mais novo de Stan Lee, o popular editor de inúmeros super-heróis da editora Marvel. Lieber estudou arte no Pratt Art Institute e na Art Students League. Após os estudos, passou quatro anos na Força Aérea, antes de ingressar no mundo dos quadrinhos. </p></div>

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
                                height={200} />
                        </li>
                    ))}

                </ul>       

                 <p> loki nasceu em Jotunheim como o filho do rei dos Gigantes de Gelo, Laufey. Pequeno e fraco para um Gigante de Gelo, loki foi abandonado por seu pai em um templo, onde era esperado que ele morresse. Em 965 a.C., pouco depois da guerra entre os Gigantes e os asgardianos, loki foi encontrado pelo rei Odin. </p></div>

            </div>

        </>

    )

}


export default Loki
