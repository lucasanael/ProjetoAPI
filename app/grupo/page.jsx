
import Link from "next/link"
import Styles from "@/app/grupo/page.module.css"
import Image from "next/image"





function Initial() {

    return (
        <>

<div>
                <div className={Styles.banner}>
                <Link className={Styles.nav} href="/"><Image
                            width={30}
                            height={30}
                            src='/voltarBranco.png'
                            alt="Grupo" /></Link>
                </div>
                <div className={Styles.faixa}>
                </div>
            </div>

          <div className={Styles.container}>

                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""><Image
                            width={50}
                            height={50}
                            src='/ana.jpeg'
                            alt="Ana" /></Link>


                    </div>

                    <div className={Styles.content}>
                        <h1>Ana Clara Lobrigato</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBlack}>

                        <Link className={Styles.nav} href=""><Image
                            width={50}
                            height={50}
                            src='/helena.jpeg'
                            alt="Helena" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Helena Souza</h1>
                        <p>(não realizou o projeto)</p>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""><Image
                            width={50}
                            height={50}
                            src='/lucas.jpeg'
                            alt="Lucas" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Lucas Anael</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""><Image
                            width={50}
                            height={50}
                            src='/manu.jpeg'
                            alt="Manuela" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Manuela Biacca</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBlack}>

                        <Link className={Styles.nav} href=""><Image
                            width={50}
                            height={50}
                            src='/mariae.jpeg'
                            alt="Maria" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Maria Eduarda Ribeiro</h1>
                        <p>(não realizou o projeto)</p>


                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href="">
                        <Image
                            width={50}
                            height={50}
                            src='/vic.jpeg'
                            alt="Victoria" /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Victória Feitoza</h1>

                    </div>

                    
                </div>

            </div>


                     <div className={Styles.logo}>
                    <Link  href="/"><Image
                            width={100}
                            height={35}
                            src='/marvel.jpg'
                            alt="Marvel" /></Link>
                    </div>

        </>

    )

}

export default Initial