"use client";
import { useEffect, useState } from "react";
import { generationMarvelHash } from '@/lib/ultilists';
import Styles from "@/app/gamora/gamora.module.css";
import Link from "next/link";
import Image from "next/image";

const publicKey = 'c11748639905323ed0218fc833d1501c';
const privateKey = 'd378b0b313a9ed4b36b17818ac93f2e4f47eea1c';
const idGamora = "1010763";
const idStarlin = "12246";
const idComic = "51843";
const idSeries = "19427";

const timestamp = new Date().getTime();
const hash = generationMarvelHash(timestamp, privateKey, publicKey);

const imgGamora = `http://gateway.marvel.com/v1/public/characters/${idGamora}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgStarlin = `http://gateway.marvel.com/v1/public/creators/${idStarlin}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgComic = `http://gateway.marvel.com/v1/public/comics/${idComic}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

const imgSeries = `http://gateway.marvel.com/v1/public/series/${idSeries}?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

function Gamora() {
  const [gamora, setGamora] = useState([]);
  const [starlin, setStarlin] = useState([]);
  const [comic, setComic] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getGamora = async () => {
      try {
        const resposta = await fetch(imgGamora);
        const data = await resposta.json();
        setGamora(data.data.results);
      } catch (error) {
        console.error('Erro ao buscar dados da API Marvel', error);
      }
    };

    const getStarlin = async () => {
      try {
        const resposta = await fetch(imgStarlin);
        const data = await resposta.json();
        setStarlin(data.data.results);
      } catch (error) {
        console.error('Erro ao buscar dados da API Marvel', error);
      }
    };

    const getComic = async () => {
      try {
        const resposta = await fetch(imgComic);
        const data = await resposta.json();
        setComic(data.data.results);
      } catch (error) {
        console.error('Erro ao buscar dados da API Marvel', error);
      }
    };

    const getSeries = async () => {
      try {
        const resposta = await fetch(imgSeries);
        const data = await resposta.json();
        setSeries(data.data.results);
      } catch (error) {
        console.error('Erro ao buscar dados da API Marvel', error);
      }
    };

    getGamora();
    getStarlin();
    getComic();
    getSeries();
  }, []);

  return (
    <>
      <div>
        <div className={Styles.banner}>
          <Link className={Styles.nav} href="/initial"><img src='voltarMorbius.png' width={100} height={70} /></Link>
        </div>
        <div className={Styles.faixa}></div>
      </div>

      <div className={Styles.imgPerfil}>
        <ul>
          {gamora.map((gamora) => (
            <li key={gamora.id}>
              {gamora.name}
              <Image
                src={`${gamora.thumbnail.path}.${gamora.thumbnail.extension}`}
                alt={gamora.name}
                width={300}
                height={300}
              />
            </li>
          ))}
        </ul>
      </div>

      <h1 className={Styles.name}>Gamora</h1>

      <div className={Styles.creator}>
        <div className={Styles.creatorPicture}>
          <ul>
            {starlin.map((starlin) => (
              <li key={starlin.id}>
                {starlin.name}
                <Image
                  src={`${starlin.thumbnail.path}.${starlin.thumbnail.extension}`}
                  alt={starlin.name}
                  width={200}
                  height={200}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.creatorTexto}>
          <p>A alienígena de pele verde apareceu pela primeira vez em Strange Tales (1951) #180, publicada em 1975. A publicação tem roteiro e arte assinados por Jim Starlin, criador da personagem. Gamora é filha adotiva de Thanos, que a criou para ser a “mulher mais mortal da Galáxia”. Isso aconteceu após o louco Titã ver os pais da menina serem mortos e todo o povo alienígena Zen-Whoberi ser eliminado da existência.</p>
        </div>
      </div>

      
        
        <div className={Styles.comic}>
          <div className={Styles.comicTexto}>
            <ul>
              {comic.map((comic) => (
                <li key={comic.id}>
                  {comic.name}
                  <Image
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.name}
                    width={200}
                    height={200}
                  />
                </li>
              ))}
            </ul>
            <p>OUT OF TIME AND OUT FOR REVENGE! The story continues as we follow GAMORA to the doomed planet that is UBLIEX. Perched on the brink of a black hole, its inhabitants count down the hours to their planet's imminent demise as it is swallowed up by the approaching Singularity. Will Gamora find her revenge among the inhabitants of Ubliex before the black hole consumes them all? Or will the citizens of this world - including a doomsday cult, junkie bounty hunters and a young woman with a tremendous destiny - stop her first?</p>
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
        </div>

        
     
    </>
  );
}

export default Gamora;
