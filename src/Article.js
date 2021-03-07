import React, { Fragment } from 'react';
import './css/article.css';
import logo from './img/ww84.gif'
import logo2 from './img/wwgold.gif'

class Article extends React.Component {

    render() {
        return(
        <Fragment>
            <div className="container">
                <div className="article row">
                    <div className="ww84 d-left col-md-6">
                        <img src={logo} alt="ww84"/>
                        <p className="text1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui neque similique iste ipsa minima odit sit magni veritatis rerum, praesentium recusandae officiis nisi numquam sapiente saepe esse, alias quos nesciunt!</p>
                    </div>
                    <div className="wwgold d-right col-md-6">
                        <img src={logo2} alt="ww84"/>
                        <p className="text1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui neque similique iste ipsa minima odit sit magni veritatis rerum, praesentium recusandae officiis nisi numquam sapiente saepe esse, alias quos nesciunt!</p>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }
}
export default Article;