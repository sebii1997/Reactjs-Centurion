import React from 'react'
import "./Carusel.css"

const Carusel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active centrado">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_737439-MLA52097497117_102022-O.webp" className="d-block w-30" alt="PC" />
                </div>
            </div>
        </div>
    )
}

export default Carusel