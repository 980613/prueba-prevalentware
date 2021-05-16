import React from 'react'
import './styles.scss'
import icon1 from '../../assets/vector6.svg'
import icon2 from '../../assets/vector7.svg'
import icon3 from '../../assets/vector8.svg'
import icon4 from '../../assets/vector5.svg'
import time from '../../assets/Time.svg'

const CardsComponent = () => {
    return (
        <div class="container mt-5">

			<div class="row">

				<div class="col">
					<div class="card" style={{width: '30rem'}}>
						<div class="card-body">
							<img class="card-img bg-primary p-3" style={{width: '5rem'}} src={ icon4 }/>
							<h2 class="card-title">Solicitudes de creacion de empresas</h2>
						</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							2 Solicitudes sin tratar
						</div>
					</div>

					<div class="card" style={{width: '30rem'}}>
						<div class="card-body">
							<img class="card-img bg-primary p-3" style={{width: '5rem'}} src={ icon1 }/>
							<h2 class="card-title">Indicadores</h2>
						</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							Visitado por ultima vez 31/01/2020
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card" style={{width: '30rem'}}>
						<div class="card-body">
							<img class="card-img bg-primary p-3" style={{width: '5rem'}} src={ icon2 }/>
							<h2 class="card-title">Inscripcion de empleados en empresas</h2>
						</div>

						<div class="card-footer text-muted m-1">
							<img src={ time }/>
							3 Usuarios sin empresa registrada
						</div>
					</div>

					<div class="card" style={{width: '30rem'}}>
						<div class="card-body">
							<img class="card-img bg-primary p-3" style={{width: '5rem'}} src={ icon3 }/>
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