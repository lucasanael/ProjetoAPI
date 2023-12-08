import Styles from "@/app/morbius/morbius.module.css"
import Link from "next/link"

function Morbius() {

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
                <img src="morbius.jpg" width={50} height={50} />
            </div>
            <h1 className={Styles.name}>Morbius</h1>


            <div className={Styles.creator}>

                <div className={Styles.creatorPicture}>
                    <div><img src="RoyThomas.jpg" width={250} height={400} /></div>
                    <div><img src="GilKane.jpg" width={250} height={400} /></div>
                </div>
                <div className={Styles.creatorTexto}><p>Morbius, o Vampiro Vivo, é um personagem fascinante da Marvel, e sua criação é creditada aos escritores Roy Thomas e o desenhista Gil Kane. A primeira aparição do anti-herói aconteceu em "The Amazing Spider-Man #101" em outubro de 1971. Roy Thomas, renomado por suas contribuições significativas ao Universo Marvel, trouxe sua habilidade narrativa única para dar vida a Morbius. Enquanto isso, Gil Kane, um artista talentoso e prolífico, visualizou o design distintivo do personagem, capturando a essência sombria e trágica do Dr. Michael Morbius. A colaboração entre Thomas e Kane resultou em um personagem memorável que se destaca por sua complexidade moral, oscilando entre sua luta contra a sede de sangue e seu desejo de encontrar uma cura para sua condição vampírica. A criação de Morbius pelos talentosos Thomas e Kane contribuiu significativamente para a diversidade de personagens dentro do vasto universo da Marvel Comics.</p></div>

            </div>

            <div className={Styles.comic}>


                <div className={Styles.comicTexto}><img src="comicMorbius.jpg" width={300} height={300} />
                <p>Morbius, o Vampiro Vivo, é um personagem fascinante da Marvel, e sua criação é creditada aos escritores Roy Thomas e o desenhista Gil Kane. A primeira aparição do anti-herói aconteceu em "The Amazing Spider-Man #101" em outubro de 1971. Roy Thomas, renomado por suas contribuições significativas ao Universo Marvel, trouxe sua habilidade narrativa única para dar vida a Morbius. Enquanto isso, Gil Kane, um artista talentoso e prolífico, visualizou o design distintivo do personagem, capturando a essência sombria e trágica do Dr. Michael Morbius. A colaboração entre Thomas e Kane resultou em um personagem memorável que se destaca por sua complexidade moral, oscilando entre sua luta contra a sede de sangue e seu desejo de encontrar uma cura para sua condição vampírica. A criação de Morbius pelos talentosos Thomas e Kane contribuiu significativamente para a diversidade de personagens dentro do vasto universo da Marvel Comics.</p></div>

            </div>

        </>




    )

}

export default Morbius