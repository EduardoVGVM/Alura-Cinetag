import { useFavoritosContext } from 'contextos/Favoritos'
import React from 'react'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom'

export default function Card({id, capa, titulo }) {

    const { favorito, adicionarFavorito } = useFavoritosContext()
    const oFavorito = favorito.some((fav) => fav.id === id)
    const icone = !oFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt='Favoritar filme'
                className={styles.favoritar}
                onClick={() => { 
                    adicionarFavorito({ id, titulo, capa })
                }} />
        </div>
    )
}
