import React from 'react'
import './styles.scss'
import { Link } from "react-router-dom";
import icon1 from '../../assets/vector6.svg'
import icon2 from '../../assets/vector7.svg'
import icon3 from '../../assets/vector8.svg'
import icon4 from '../../assets/vector5.svg'
import time from '../../assets/Time.svg'

const CardsComponent = () => {
    return (
        <div class="container cardsContainer">

			<div class="row">

				<div class="col-lg-6 ">

					<div class="card mb-5">
						<img class="imgStyle card-img-top imgStyle p-3" style={{width: '5rem'}} src={ icon4 }/>
						<div class="card-body">
						<h2 class="card-title">
							<Link to="/aprobacion" >Solicitudes de creacion de empresas.</Link>
						</h2>
					</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							2 Solicitudes sin tratar
						</div>
					</div>

					<div class="card mb-5">
					<img class="card-img-top imgStyle p-3" style={{width: '5rem'}} src={ icon1 }/>
						<div class="card-body">
					
							<h2 class="card-title">Indicadores</h2>
						</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							Visitado por ultima vez 31/01/2020
						</div>
					</div>
				</div>

				<div class="col-lg-6">

					<div class="card mb-5">
					<img class="card-img-top imgStyle p-3" style={{width: '5rem'}} src={ icon2 }/>
						<div class="card-body">
							
							<h2 class="card-title">Inscripcion de empleados en empresas</h2>
						</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							3 Usuarios sin empresa registrada
						</div>
					</div>

					<div class="card mb-5">
					<img class="card-img-top imgStyle p-3" style={{width: '5rem'}} src={ icon3 }/>
						<div class="card-body">
							
							<h2 class="card-title">Gestion de usuarios</h2>
						</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							532 Usuarios activos en la plataforma 
						</div>
					</div>

				</div>

			</div>

        </div>
    )
}


export default CardsComponent