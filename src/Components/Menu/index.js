import React from 'react'
import './styles.css'
import Logo from '../../assets/Logo-1.svg'
import Text from '../../assets/Text.svg'
import Search from '../../assets/Vector.svg'
import Administracion from '../../assets/Administracion.svg'
import Empleo from '../../assets/Empleo.svg'
import CV from '../../assets/CV.svg'
import Ellipse from '../../assets/Ellipse1.svg'


const MenuComponent = () => {
    return (
        <nav>
            <ul>
                <img src={ Logo }/>
                <img src={ Text }/>
                <img src={ Search }/>
                <input type="text" placeholder="Buscar..."/>
                <img src={ Administracion }/>
                <a href="#">Administracion</a>
                <img src={ Empleo }/>
                <select name="type">
                    <opcion disable>Empleo</opcion>
                    <option value="item1">item1</option>
                    <option value="item2">item2</option>
                    <option value="item3">item3</option>
                </select>
                <img src={ CV }/>
                <a href="#">Mi CV</a>
                <img src={ Ellipse }/>
                <a href="#">Daniel</a>
                <select name="type">
                    <opcion disable>Daniel</opcion>
                    <option value="item1">item1</option>
                    <option value="item2">item2</option>
                    <option value="item3">item3</option>
                </select>
            </ul>    
        </nav>
    )
}

export default MenuComponent
