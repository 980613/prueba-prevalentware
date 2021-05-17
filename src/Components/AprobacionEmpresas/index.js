import React, { useState } from 'react'
import './styles.scss'
import LogoEmpresa from '../../assets/Logo-Empresa.svg'
import aprovar from '../../assets/aprovar.svg'
import rechazar from '../../assets/rechazar.svg'
import clip from '../../assets/clip.svg'
import pdf from '../../assets/pdfimage.svg'
import PdfDummy from '../../assets/PdfDummy.pdf'

import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

const AprobacionEmpresas = () => {
    const [showModal, hideModal] = useModal(() => (
        <ReactModal isOpen>
            <div>
                <div class="modal-header mb-5">
                    <h3 class="modal-title " id="exampleModalLongTitle">Documentos Cargados</h3>
                    <button type="button" class="close btn btn-secondary" onClick={hideModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="d-flex justify-content-center">
                    <div>
                        <div class='d-flex p-2'>                        
                            <a href={ PdfDummy } download>
                                <img src={ pdf } alt="W3Schools" width="30" height="30"/>
                            </a>
                            <h4>RUT PrevalentWare</h4>
                        </div>
                        <div class='d-flex p-2'>                        
                            <a href={ PdfDummy } download>
                                <img src={ pdf } alt="W3Schools" width="30" height="30"/>
                            </a>
                            <h4>Logo PrevalentWare</h4>
                        </div>
                        <div class='d-flex p-2'>                        
                            <a href={ PdfDummy } download>
                                <img src={ pdf } alt="W3Schools" width="30" height="30"/>
                            </a>
                            <h4>Acta de constitucion PrevalentWare</h4>
                        </div>
                        <div class='d-flex p-2'>                        
                            <a href={ PdfDummy } download>
                                <img src={ pdf } alt="W3Schools" width="30" height="30"/>
                            </a>
                            <h4>Camara de Comercio PrevalentWare</h4>
                        </div>
                        <div class='d-flex p-2'>                        
                            <a href={ PdfDummy } download>
                                <img src={ pdf } alt="W3Schools" width="30" height="30"/>
                            </a>
                            <h4>Otro documento PrevalentWare</h4>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
      ));
    
    return(
        
        <div class="container">
            <div class='d-flex mt-3 flex-wrap'>
                <h3>Administracion</h3>
                <h3> / Aprobacion de Empresas </h3>
            </div>
            
            <div class='contentStyle'>
                <div>
                    <img class='bg bg-light p-5' src={ LogoEmpresa }/>
                </div>
                <div class='buttonsStyle'>
                    <div>
                        <img src= { aprovar }/>
                        <a className="buttons" href="#">Aprovar Empresa</a>
                    </div>
                    <div>
                        <img src= { rechazar }/>
                        <a className="buttons" href="#">Rechazar Empresa</a>
                    </div>
                </div>
            </div>

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
                        </div>
                    </form>
                    <button class="btn btn-light mt-5 mb-5" onClick={showModal}>  <img src= { clip }/> Ver archivos adjuntos</button> 
                </div>
            </div>
        </div>
    )
}

export default AprobacionEmpresas
