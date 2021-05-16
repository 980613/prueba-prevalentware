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
                    <a href="#">Aprovar Empresa</a>
                <img src= { rechazar }/>
                    <a href="#">Rechazar Empresa</a>

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

                        <a href="#">Ver Archivos Adjuntos</a>
                        <img src= { clip }/>
                    </div>  
                </form>

            </div>
          
        </div>
    )
}

export default AprobacionEmpresas
