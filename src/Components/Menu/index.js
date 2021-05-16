import React, { useState } from 'react'
import './styles.scss'
import Logo from '../../assets/Logo-1.svg'
import Text from '../../assets/Text.svg'
import Search from '../../assets/Vector.svg'
import Administracion from '../../assets/Administracion.svg'
import Empleo from '../../assets/Empleo.svg'
import CV from '../../assets/CV.svg'
import Ellipse from '../../assets/Ellipse1.svg'
  
const MenuComponent = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container">

                <a class="navbar-brand" href="#">
                    <img src={ Logo }/>
                </a>

                <img src={ Text }/>

                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
                onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>

                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">

                        <ul class="navbar-nav">

                            <li class="nav-item">
                                <form>
                                    <img src={ Search }/>
                                    <input class="form-control" type="text" placeholder="Buscar..."/>
                                </form>
                            </li>

                            <li class="nav-item">
                                <img src={ Administracion }/>
                                <a class="nav-link" href="#">Administracion</a>
                            </li>

                            <li class="nav-item dropdown">
                                 <img src={ Empleo }/>

                                    <a href="#" class="nav-link dropdown-toggle"
                                    data-toggle="dropdown">Empleo</a>

                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">item 1</a>
                                        <a href="#" class="dropdown-item">item 2</a>
                                        <a href="#" class="dropdown-item">item 3</a>
                                    </div>
                            </li>

                            <li class="nav-item">
                                <img src={ CV }/>
                                <a class="nav-link" href="#">Mi CV</a>
                            </li>

                            <li class="nav-item dropdown">
                                <img src={ Ellipse }/>
                                    <a href="#" class="nav-link dropdown-toggle"
                                    data-toggle="dropdown">Daniel</a>
                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item">item 1</a>
                                        <a href="#" class="dropdown-item">item 2</a>
                                        <a href="#" class="dropdown-item">item 3</a>
                                    </div>
                            </li>
        
                        </ul> 

                    </div> 

            </div>
      
        </nav>
    )
}

export default MenuComponent
