import styles from './AboutUs.module.css'
import AboutImg from './../images/aboutImg.jpg'

export default function AboutUs() {
    return(
       <div className={styles.about}>
           <img alt='about' src={AboutImg} className={styles.image}/>
           <h2>Sobre nós</h2>
            <p>
            Imagine uma empresa focada em reunir talentos para acelerar a transformação digital de empresas de todos os mercados.
            </p>
            <p>
            Muito prazer, somos a Zallpy.
            </p>
            <p>
            Somos especialistas em desenvolver soluções digitais customizadas, com tecnologia de ponta e de alto valor agregado. Somos parceiros estratégicos de grandes players internacionais, entregando inovação e inteligência a multinacionais de diversos segmentos. Atuamos como uma extensão do cliente, com alto grau de envolvimento no negócio e na geração de resultados.
            </p>
            <p>
            Compartilhamos um ambiente de trabalho leve, colaborativo e integrado, que inspira a troca de experiências e a criatividade. Atuamos em diferentes modelos, com flexibilidade e agilidade para gerir os times conforme a demanda, oferecendo o melhor perfil e expertise técnicos para cada desafio.
            </p>
       </div> 
    )
}