
import Link from "next/link"
import Styles from "@/app/mycss/page.module.css"
import Image from "next/image"





function Initial() {

    return (
        <>
            <div className={Styles.marvel}>
                <Link className={Styles.nav} href="/grupo"> <Image
                            width={40}
                            height={40}
                            src='/iconGrupo.png'
                            alt="Icon Grupo" /></Link>
            </div>


            <div className={Styles.texto}>
                <p>Esse site foi produzido pelos alunos
                    Lucas Anael, Manuela Biacca, Ana Clara Lobrigato e Victoria Feitoza,
                    utilizando a API da Marvel, que nos ofereceu acesso a um vasto universo de informações relacionadas aos icônicos personagens e histórias da Marvel Comics. Desenvolvida pela Marvel Entertainment, essa interface pública fornece acesso aos metadados dos seus quadrinhos, suportando autenticação, versionamento, recuperação de coleções de recursos ou recursos específicos pelo ID, cruzamento de origens de solicitações, compressões e tags utilizadas para evitar o retorno da mesma resposta mais de uma vez, se o conteúdo não mudou desde a primeira requisição.

                </p>
                <br />
                Clique na foto do o personagem para descobrir sua história:


            </div>

            <div className={Styles.container}>

                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/miranha"><Image
                            width={500}
                            height={500}
                            src='/miranha.jpg'
                            alt="Spider Man" /></Link>


                    </div>

                    <div className={Styles.content}>
                        <h1>Spider-Man</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/morbius"> <Image
                            width={500}
                            height={500}
                            src='/morbius.jpg'
                            alt="Morbius" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Morbius</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/loki"><Image
                            width={500}
                            height={500}
                            src='/loki.jpg'
                            alt="Loki" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Loki</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/gamora"><Image
                            width={500}
                            height={500}
                            src='/gamora.jpg'
                            alt="Gamora" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Gamora</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/blackWidow"><Image
                            width={500}
                            height={500}
                            src='/blackwidow.jpg'
                            alt="Black Widow" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Black Widow</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="/deadpool"><Image
                            width={500}
                            height={500}
                            src='/deadpool.jpg'
                            alt="DeadPool" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Deadpool</h1>

                    </div>

                </div>

            </div>

            
            <div className={Styles.logo}>
                    <Link  href="/">
                    <Image
                            width={100}
                            height={35}
                            src='/marvel.jpg'
                            alt="Marvel" /></Link>
                    
                    </div>


        </>

    )

}

export default Initial