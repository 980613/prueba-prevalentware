import React from 'react'
import icon1 from '../../assets/vector6.svg'
import icon2 from '../../assets/vector7.svg'
import icon3 from '../../assets/vector8.svg'
import icon4 from '../../assets/vector9.svg'


const CardsComponent = () => {
    return (
        <div>
          	<div className="card-1">
            	<div className="icon">
					<img src={ icon1 }/>
            	</div>
            	<div className="content">
					<h2>Solicitudes de creacion de empresas</h2>
            	</div>
          	</div>

          	<div className="card-2">
				<div className="icon">
					<img src={ icon2 }/>
			  	</div>
				<div className="content">
					<h2>Indicadores</h2>
				</div>
          	</div>

          	<div className="card-3">
				<div className="icon">
					<img src={ icon3 }/>
				</div>
				<div className="content">
					<h2>Inscripcion de empleados en empresas</h2>
				</div>
          	</div>

          	<div className="card-4">
				<div className="icon">
					<img src={ icon4 }/>
				</div>
				<div className="content">
					<h2>Gestion de usuarios</h2>
				</div>
          	</div>    
        </div>
    )
}


export default CardsComponent