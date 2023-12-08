
import Link from "next/link"
import Styles from "@/app/initial/page.module.css"





function Initial() {

    return (
        <>
            <div className={Styles.marvel}>
                <Link className={Styles.nav} href="/morbius"><img src='iconGrupo.png' width={40} height={30} /></Link>
            </div>


            <div className={Styles.texto}>
                <p>Esse site foi produzido pelos alunos
                    Lucas Anael, Manuela Biacca, Ana Clara, Victoria Feitoza, Maria E. Ribeiro e Helena Souza
                    utilizando a API da Marvel, que nos ofereceu cesso a um vasto universo de informações relacionadas aos icônicos personagens e histórias da Marvel Comics. Desenvolvida pela Marvel Entertainment, essa interface de programação de aplicativos API possibilita a integração de dados detalhados sobre quadrinhos, personagens, eventos, séries e muito mais em aplicações e sites.
                    Clique na foto do o personagem para descobrir sua história</p>
            </div>

            <div className={Styles.container}>

                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"><img src="miranha.jpg" width={50} height={50} /></Link>


                    </div>

                    <div className={Styles.content}>
                        <h1>Spider-Man</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"><img src="morbius.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Morbius</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"> <img src="loki.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Loki</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"> <img src="gamora.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Gamora</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"><img src="blackwidow.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Black Widow</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"> <img src="deadpool.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Deadpool</h1>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Initial