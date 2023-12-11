
import Link from "next/link"
import Styles from "@/app/grupo/page.module.css"





function Initial() {

    return (
        <>

<div>
                <div className={Styles.banner}>
                <Link className={Styles.nav} href="/initial"><img src='voltarMorbius.png' width={100} height={70} /></Link>
                </div>
                <div className={Styles.faixa}>
                </div>
            </div>

          <div className={Styles.container}>

                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""><img src="ana.jpeg" width={50} height={50} /></Link>


                    </div>

                    <div className={Styles.content}>
                        <h1>Ana Clara Lobrigato</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""><img src="helena.jpeg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Helena Souza</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""> <img src="lucas.jpeg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Lucas Anael</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""> <img src="manu.jpeg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Manuela Biacca</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""><img src="mariae.jpeg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Maria Eduarda Ribeiro</h1>

                    </div>

                </div>
                <div className={Styles.card}>

                    <div className={Styles.imgBox}>

                        <Link className={Styles.nav} href=""> <img src="vic.jpeg" width={50} height={50} /></Link>

                    </div>

                    <div className={Styles.content}>
                        <h1>Victória Feitoza</h1>

                    </div>

                    
                </div>

            </div>


                     <div className={Styles.logo}>
                    <Link  href="/initial"><img src='marvel.jpg' width={100} height={35} /></Link>
                    </div>

        </>

    )

}

export default Initial