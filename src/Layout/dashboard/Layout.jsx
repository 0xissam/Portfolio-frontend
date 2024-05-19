import React from 'react'
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div>
            <div className="crm_body_bg">
                <nav className="sidebar">
                    <div className="logo d-flex justify-content-between">
                        <a href="/">
                            <h3 className='text-center'>NexCV</h3>
                        </a>
                        <div className="sidebar_close_icon d-lg-none">
                            <i className="ti-close"></i>
                        </div>
                    </div>
                    <ul id="sidebar_menu">
                        <li className="mm-active">
                            <a className="has-arrow" href="#" aria-expanded="false">

                                <img src="img/menu-icon/1.svg" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <img src="img/menu-icon/2.svg" />
                                <span>Pages</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <img src="img/menu-icon/3.svg" />
                                <span>Applications</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <img src="img/menu-icon/4.svg" />
                                <span>UI Component</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <img src="img/menu-icon/5.svg" />
                                <span>Widgets</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <img src="img/menu-icon/6.svg" />
                                <span>Forms</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="#" aria-expanded="false">
                                <img src="img/menu-icon/7.svg" />
                                <span>Charts</span>
                            </a>
                        </li>
                    </ul>
                </nav>


                <section className="main_content dashboard_part">

                    <div className="container-fluid g-0">
                        <Outlet />
                    </div>

                    <div className="footer_part">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="footer_iner text-center">
                                        <p>2020 © Influence - Designed by<a href="#"> Dashboard</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}

export default DashboardLayout;