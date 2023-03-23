import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import { useFavoritosContext } from 'contextos/Favoritos'
import React from 'react'
import styles from './Favoritos.module.css'

export default function Favoritos() {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo><h1>Meus Favoritos</h1></Titulo>
      <section className={styles.container}>
        {favorito.map((f) => {return <Card {... f} key={f.id}/>
      })}
      </section>
    </>
  )
}