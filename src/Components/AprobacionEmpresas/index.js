import React from 'react'
import LogoEmpresa from '../../assets/Logo-Empresa.svg'
import aprovar from '../../assets/aprovar.svg'
import rechazar from '../../assets/rechazar.svg'


const AprobacionEmpresas = () => {
    return (
        <div>
            <div>
                <img src={ LogoEmpresa }/>
            </div>
            <img src= { aprovar }/>
            <a href="#">Aprovar Empresa</a>
            <img src= { rechazar }/>
            <a href="#">Rechazar Empresa</a>

            <form>
                <input type="text" placeholder="nombre de la empresa"/>
                <input type="text" placeholder="tipo de identificacion"/>
                <input type="text" placeholder="Numero de empleados"/>
                <input type="text" placeholder="Razon Social"/>
                <input type="text" placeholder="Identificacion"/>
            </form>

            <a href="#">Ver Archivos Adjuntos</a>

        </div>
    )
}

export default AprobacionEmpresas
