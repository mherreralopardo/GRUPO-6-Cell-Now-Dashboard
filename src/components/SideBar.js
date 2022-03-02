import React from 'react';
import image from '../assets/images/logo_small_icon_only.png';
import {Route, Routes, Link} from 'react-router-dom'




import Error404 from './Error404';
import CategoryInDb from './CategoryInDb';
import CellphonesInDb from './CellphonesInDb';
import ContentRowCellphone from './ContentRowCellphone';
import CategoriesDetail from './CategoriesDetail';
import ContentWrapper from './ContentWrapper';
import SearchCellphone from './SearchCellphone';




function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-70" src={image} alt="Digital House" width="100"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Cell Now</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                     <Link className="nav-link collapsed" to="/stats">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Estadísticas</span>
                    </Link>
                    
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Nuestras marcas</span>
                    </Link>
                </li>
                

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/table">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Nuestros productos</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchCellphone">
                        <i className="fas fa-search"></i>
                        <span>Encontrá tu celular ideal</span>
                    </Link>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            


    <Routes>
          
        <Route path="/" element = {<ContentWrapper />} />
        <Route path="/stats" element = {<div className='col-8'> <ContentRowCellphone /></div>} />
        <Route path="/categories" element =  {<CategoryInDb />} />
        <Route path="/table" element = {<CellphonesInDb />} />
        <Route path="/categories/:id" element = {<CategoriesDetail />} />
        <Route path="/SearchCellphone" element = {<SearchCellphone />} />
        


          {/*<Route path='*' element= {<Error404 />} /> */}

    </Routes>




        </React.Fragment>
    )
}
export default SideBar;