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

const imgSeries = `http://gateway.marvel.com/v1/public/series/${idSeries}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

function Deadpool() {

  const [deadpool, setDeadpool] = useState([])
  const [nicieza, setNicieza] = useState([])
  const [liefeld, setLiefeld] = useState([])
  const [comic, setComic] = useState([])
  const [series, setSeries] = useState([])

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
    getDeadpool()

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
    getNicieza()

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
    getLiefeld()

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
          <Link className={Styles.nav} href="/"> <Image
            width={30}
            height={30}
            src='/voltarPreto.png'
            alt="Voltar" /></Link>
        </div>
        <div className={Styles.faixa}>
        </div>
      </div>

      <div>
        <ul>
          {deadpool.map((deadpool) => (
            <li className={Styles.imgPerfil} key={deadpool.id}>{deadpool.name}
              <Image
                src={`${deadpool.thumbnail.path}.${deadpool.thumbnail.extension}`}
                alt={deadpool.name}
                width={200}
                height={200} />
            </li>
          ))}
        </ul>
      </div>

      <h1 className={Styles.name}>Deadpool</h1>

      <div className={Styles.creator}>
        <div className={Styles.creatorPicture}>
          <ul>
            {nicieza.map((nicieza) => (
              <li key={nicieza.id}>{nicieza.name}
                <Image
                  src={`${nicieza.thumbnail.path}.${nicieza.thumbnail.extension}`}
                  alt={nicieza.name}
                  width={200}
                  height={200} />
              </li>
            ))}
          </ul>
        </div>

        <div className={Styles.creatorPicture}>
          <ul>
            {liefeld.map((liefeld) => (
              <li key={liefeld.id}>{liefeld.name}
                <Image
                  src={`${liefeld.thumbnail.path}.${liefeld.thumbnail.extension}`}
                  alt={liefeld.name}
                  width={200}
                  height={200} />
              </li>
            ))}
          </ul>
        </div>

        <div className={Styles.creatorTexto}>
          <p>Criado pelo artista e escritor Rob Liefeld e pelo escritor Fabian Nicieza, Deadpool fez sua primeira aparição nas páginas da capa de The New Mutants #98 datada de fevereiro de 1991. De acordo com Nicieza, Liefeld criou o design visual e o nome do personagem, e o próprio Nicieza criou os maneirismos de fala do personagem.</p>
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
                  height={310} />
              </li>
            ))}
          </ul>
          <p>HEART-BROKEN! Things looking great for Deadpool and his new paramour, Valentine Vuong. You know how it can be in love - you just want to be together, but there is always some secret society of killers that gets in the way and your heart and/or glass arms get shattered.</p>
        </div>

        <div className={Styles.seriesTexto}>
          <ul>
            {series.map((series) => (
              <li key={series.id}>
                {series.name}
                <Image
                  src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                  alt={series.name}
                  width={400}
                  height={300}

                />
              </li>
            ))}
          </ul>
          <p> Deadpool, a série de quadrinhos lançada em 1994, representa um marco significativo no universo da Marvel Comics. Criado por Fabian Nicieza e Rob Liefeld, o anti-herói mercenário conhecido como Deadpool, alter ego de Wade Wilson, cativou os fãs com sua personalidade única e irreverente. A série é reconhecida por seu humor ácido, quebra de quarta parede e narrativa autoconsciente, características que diferenciam Deadpool de outros personagens do gênero. Ao longo dos anos, a popularidade do personagem cresceu exponencialmente, culminando em adaptações cinematográficas bem-sucedidas que solidificaram Deadpool como um ícone cultural, conquistando tanto os aficionados por quadrinhos quanto o público em geral. A série de 1994, essencial para compreender a essência do Mercenário Tagarela, contribuiu para o status duradouro e a relevância do personagem nos diversos meios de entretenimento.</p>
        </div>
      </div>
    </>
  );
}

export default Deadpool;
