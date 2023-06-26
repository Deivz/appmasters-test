// import React from 'react';
import styles from './notFound.module.css';
import notFound from '../../assets/img/pagina-nao-encontrada.png'

export default function NotFound() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <img className={styles.img} src={notFound} alt='Erro http código 404: página não encontrada' />
      </div>
    </section>
  )
}
