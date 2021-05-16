import React from 'react'
import './styles.scss'
import LogoEmpresa from '../../assets/Logo-Empresa.svg'
import aprovar from '../../assets/aprovar.svg'
import rechazar from '../../assets/rechazar.svg'
import clip from '../../assets/clip.svg'

const AprobacionEmpresas = () => {
    return (
        <div class="container">

            <div>
                <div>
                    <img src={ LogoEmpresa }/>
                </div>

                <img src= { aprovar }/>
                    <a className="buttons" href="#">Aprovar Empresa</a>
                <img src= { rechazar }/>
                    <a className="buttons" href="#">Rechazar Empresa</a>

                <div class="row">

                    <form>
                        <div class="form-group">
                            <label class="form-text text-muted" for="Nombre">Nombre de la empresa</label>
                            <input type="text" class="form-control" placeholder=""/>

                            <label class="form-text text-muted" for="Nombre">Tipo de identificacion</label>
                            <input type="text" class="form-control" placeholder=""/>

                            <label class="form-text text-muted" for="Nombre">Numero de empleados</label>
                            <input type="text" class="form-control" placeholder=""/>

                            <label class="form-text text-muted" for="Nombre">Razon Social</label>
                            <input type="text" class="form-control" placeholder=""/>

                            <label class="form-text text-muted" for="Nombre">Identificacion</label>
                            <input type="text" class="form-control" placeholder=""/>

                            <img src= { clip }/>
                            <a className="buttons" href="#">Ver Archivos Adjuntos</a>
                            
                        </div>  
                    </form>

                </div>

            </div>
          
        </div>
    )
}

export default AprobacionEmpresas
