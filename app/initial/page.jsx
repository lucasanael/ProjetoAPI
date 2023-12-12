
import Link from "next/link"
import Styles from "@/app/initial/page.module.css"





function Initial() {

    return (
        <>
            <div className={Styles.marvel}>
                <Link className={Styles.nav} href="/grupo"><img src='iconGrupo.png' width={50} height={50} /></Link>
            </div>


            <div className={Styles.texto}>
                <p>Esse site foi produzido pelos alunos
                    Lucas Anael, Manuela Biacca, Ana Clara Lobrigato e Victoria Feitoza,
                    utilizando a API da Marvel, que nos ofereceu acesso a um vasto universo de informações relacionadas aos icônicos personagens e histórias da Marvel Comics. Desenvolvida pela Marvel Entertainment, essa interface pública fornece acesso aos metadados dos seus quadrinhos, suportando autenticação, versionamento, recuperação de coleções de recursos ou recursos específicos pelo ID, cruzamento de origens de solicitações, compressões e tags utilizadas para evitar o retorno da mesma resposta mais de uma vez, se o conteúdo não mudou desde a primeira requisição.</p>
                 Clique na foto do o personagem para descobrir sua história:
            </div>

            <div className={Styles.container}>

                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/miranha"><img src="miranha.jpg" width={50} height={50} /></Link>


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

                        <Link className={Styles.nav} href="/loki"> <img src="loki.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Loki</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/gamora"> <img src="gamora.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Gamora</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/blackWidow"><img src="blackwidow.jpg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Black Widow</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/deadpool"> <img src="deadpool.jpg" width={50} height={50} /></Link>

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