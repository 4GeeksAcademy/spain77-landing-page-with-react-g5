import React from "react";

export const Cards = () => {

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div class="col-4">
                    <div className="card text-center">
                        <img src="https://c.pxhere.com/photos/0f/e6/espa_a_paisajes_landscape_spain_galicia_pontevedra_covelo_gaby1-587296.jpg!s" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cuenca</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                <div className="card text-center">
                <img src="https://cdn.pixabay.com/photo/2015/11/18/16/09/valencia-1049399_960_720.jpg
                        " className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cuenca</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                <div className="card text-center">
                <img src="https://cdn.pixabay.com/photo/2013/04/22/17/29/seville-106505_960_720.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sevilla</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
