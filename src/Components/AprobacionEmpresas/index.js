import React, { useState } from 'react'
import './styles.scss'
import LogoEmpresa from '../../assets/Logo-Empresa.svg'
import aprovar from '../../assets/aprovar.svg'
import rechazar from '../../assets/rechazar.svg'
import clip from '../../assets/clip.svg'
import pdf from '../../assets/pdfimage.svg'
import PdfDummy from '../../assets/PdfDummy.pdf'

const AprobacionEmpresas = ({ isShowing, hide }) => {

    return(
        
        <div class="container">

            <a href="#">Administracion</a>
            <h2> / Aprobacion de Empresas </h2>
                <div>
                    <img class="d-flex bg bg-light p-5 justify-content-center aling-items-center" src={ LogoEmpresa }/>
                </div>

                <img src= { aprovar }/>
                    <a className="buttons" href="#">Aprovar Empresa</a>
                <img src= { rechazar }/>
                    <a className="buttons" href="#">Rechazar Empresa</a>

                <div class="row">

                    <div class="col-lg-6">
                        <form>
                            <div class="form-group">
                                <label class="form-text text-muted" for="Nombre">Nombre de la empresa</label>
                                <input type="text" class="form-control" placeholder=""/>

                                <label class="form-text text-muted" for="Nombre">Tipo de identificacion</label>
                                <input type="text" class="form-control" placeholder=""/>

                                <label class="form-text text-muted" for="Nombre">Numero de empleados</label>
                                <input type="text" class="form-control" placeholder=""/>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-6">
                        <form>
                            <div class="form-group">

                                <label class="form-text text-muted" for="Nombre">Razon Social</label>
                                <input type="text" class="form-control" placeholder=""/>

                                <label class="form-text text-muted" for="Nombre">Identificacion</label>
                                <input type="text" class="form-control" placeholder=""/>

                                <img src= { clip }/> 

                        

                                
                                <button class="btn btn-info mt-5" data-toggle="modal"
                                data-target="#modal1" onClick={toggle}>
                                Ver archivos adjuntos
                                </button> 
                            
                                <div class="modal" id="modal1" isShowing={isShowing} hide={toggle}>
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                                <h1 class="modal-title">titulo modal</h1>

                                                <button class="close" 
                                                data-dismiss="modal">&times;
                                                </button>

                                            <div class="modal-body">
                                                    <a href={ PdfDummy } download>
					                                <img src={ pdf } alt="W3Schools" width="104" height="142"/>
		                                            </a>
                                                <h2>RUT PrevalentWare</h2>
                                                <h2>Logo PrevalentWare</h2>
                                                <h2>Acta de constitucion PrevalentWare</h2>
                                                <h2>Camara de Comercio PrevalentWare</h2>
                                                <h2>Otro documento PrevalentWare</h2>
                                            </div>

                                         </div>
                                    </div>
                                </div> 
                       
                             </div>
                        </form>
                    </div>

                </div>
          
        </div>
    )
}

export default AprobacionEmpresas
