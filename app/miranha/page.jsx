"use client"

import { useEffect, useState } from "react"
import { generationMarvelHash } from '@/lib/ultilists'
import Styles from "@/app/miranha/miranha.module.css"
import Link from "next/link"
import Image from "next/image"


const publicKey = "80c60e1770fce6800c10d913c59bb2de"
const privateKey = "276dd8f4fee5669656c1f150cab0a16186b6b210"
const idMiranha = "1009610"
const idLee = "30"
const idDitko = "32"
const idComic = "21171"

const timestamp = new Date().getTime()
const hash = generationMarvelHash(timestamp, privateKey, publicKey)

const imgMiranha = `http://gateway.marvel.com/v1/public/characters/${idMiranha}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgLee = `http://gateway.marvel.com/v1/public/creators/${idLee}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgDitko = `http://gateway.marvel.com/v1/public/creators/${idDitko}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

function Miranha() {

    const [miranha, setMiranha] = useState([])
    const [lee, setLee] = useState([])
    const [ditko, setDitko] = useState([])
    const [comic, setComic] = useState([])

    useEffect(() => {

        const getMiranha = async () => {
            try {
                const resposta = await fetch(imgMiranha)
                const data = await resposta.json()
                setMiranha(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getMiranha()

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

        const getDitko = async () => {
            try {
                const resposta = await fetch(imgDitko)
                const data = await resposta.json()
                setDitko(data.data.results)
            } catch (error) {
                console.error('Erro ao buscar dados da API Marvel', error)
            }
        }
        getDitko()

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
                    <Link className={Styles.nav} href="/initial"><img src='voltarPreto.png' width={30} height={30} /></Link>
                </div>
                <div className={Styles.faixa}>
                </div>
            </div>

            <div>
                <ul>
                    {miranha.map((miranha) => (
                        <li className={Styles.imgPerfil} key={miranha.id}>{miranha.name}
                            <Image
                                src={`${miranha.thumbnail.path}.${miranha.thumbnail.extension}`}
                                alt={miranha.name}
                                width={300}
                                height={300} />
                        </li>
                    ))}
                </ul>
            </div>
            <h1 className={Styles.name}>Spider-Man</h1>

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
                                        height={300} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <ul>
                            {ditko.map((ditko) => (
                                <li key={ditko.id}>{ditko.name}
                                    <Image
                                        src={`${ditko.thumbnail.path}.${ditko.thumbnail.extension}`}
                                        alt={ditko.name}
                                        width={200}
                                        height={300} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>

                    <div className={Styles.creatorTexto}>
                        <p>Stan Lee (1922-2018) e Steve Ditko (1927-2018) foram dois dos mais influentes criadores de quadrinhos, notáveis por seu trabalho conjunto na Marvel Comics. Escritor, editor, editor-chefe e presidente da Marvel Comics, Stan Lee foi uma figura central na transformação da Marvel de uma editora de quadrinhos comum em uma potência cultural. Ditko é mais conhecido por sua colaboração com Stan Lee na criação do Homem-Aranha e do Doutor Estranho.</p>
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
                                        height={200} />
                                </li>
                            ))}
                        </ul>
                        <p>O Homem-Aranha, alter ego de Peter Parker, é um super-herói da Marvel Comics. Após ser picado por uma aranha geneticamente modificada, Peter ganha habilidades como força sobre-humana e a capacidade de escalar paredes. Ele se torna o Homem-Aranha e luta contra o crime em Nova York. Peter é um estudante universitário, fotógrafo freelance e herói mascarado, conhecido por seu traje vermelho e azul, além de suas habilidades acrobáticas. Sua história destaca a responsabilidade associada aos seus poderes e suas lutas diárias. O Homem-Aranha é um ícone cultural presente em quadrinhos, filmes e outros meios de entretenimento.</p>
                    </div>
                </div>
            
        </>
    )
}

export default Miranha;
