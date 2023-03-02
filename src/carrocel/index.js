import React, { useState, useEffect, useRef } from 'react'
import './carrossel.css'
import { motion } from 'framer-motion'
import Imagen1 from '../imagens/img1.jpg'
import Imagen2 from '../imagens/img2.jpg'
import Imagen3 from '../imagens/img3.jpg'
import Imagen4 from '../imagens/img4.jpg'
import Imagen5 from '../imagens/img5.jpg'

const imagem = [Imagen1, Imagen2, Imagen3, Imagen4, Imagen5];

export default props => {

    const carrossel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    return (
        <div className='card'>
            <motion.div ref={carrossel} className='carrossel' whiLeTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    className='inner'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {
                        imagem.map(imagem => (
                            <motion.div className='item' key={imagem}>
                                <img src={imagem} alt="txt alt" />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

        </div>
    )
}
