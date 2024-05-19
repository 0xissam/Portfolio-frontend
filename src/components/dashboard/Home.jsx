import React from 'react'
function DashboardHome() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="header_iner d-flex justify-content-between align-items-center">
                        <div className="sidebar_icon d-lg-none">
                            <i className="ti-menu"></i>
                        </div>
                        <div className="serach_field-area">
                            <div className="search_inner">
                                <form action="#">
                                    <div className="search_field">
                                        <input type="text" placeholder="Search here..." />
                                    </div>
                                    <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.508" height="17.508" viewBox="0 0 17.508 17.508">
                                            <path id="icon_search" d="M13.9,12.288a7.415,7.415,0,0,0,1.532-4.567A7.681,7.681,0,0,0,7.769,0,7.775,7.775,0,0,0,0,7.721a7.775,7.775,0,0,0,7.769,7.721,7.3,7.3,0,0,0,4.6-1.522l3.283,3.262a1.062,1.062,0,0,0,1.532,0,1.047,1.047,0,0,0,0-1.522Zm-6.128.87A5.5,5.5,0,0,1,2.188,7.721a5.581,5.581,0,0,1,11.161,0A5.5,5.5,0,0,1,7.769,13.158Z" fill="#818e94" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="header_right d-flex justify-content-between align-items-center">
                            <div className="header_notification_warp d-flex align-items-center">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                            <g id="Group_1095" data-name="Group 1095" transform="translate(-127.822 -143.822)">
                                                <rect id="view-box" width="36" height="36" transform="translate(127.822 143.822)" fill="none" />
                                                <path id="Shape" d="M8.911,25.247V24.5H3.342A3.345,3.345,0,0,1,0,21.163V20.6a3.776,3.776,0,0,1,2.1-3.4,1.852,1.852,0,0,0,1.024-1.5l.663-7.293A9.248,9.248,0,0,1,15.769.425a8.135,8.135,0,0,0-.942,2.041,7.12,7.12,0,0,0-1.833-.238A6.983,6.983,0,0,0,6.007,8.611L5.344,15.9A4.068,4.068,0,0,1,3.1,19.187,1.567,1.567,0,0,0,2.228,20.6v.567a1.116,1.116,0,0,0,1.113,1.115H22.648a1.116,1.116,0,0,0,1.115-1.115V20.6a1.564,1.564,0,0,0-.87-1.407A4.067,4.067,0,0,1,20.647,15.9l-.294-3.237a8.128,8.128,0,0,0,2.267.329l.246,2.707a1.871,1.871,0,0,0,1.019,1.493,3.783,3.783,0,0,1,2.105,3.4v.567A3.344,3.344,0,0,1,22.648,24.5H17.079v.743a4.084,4.084,0,0,1-8.168,0Zm2.227,0a1.857,1.857,0,0,0,3.713,0V24.5H11.138ZM22.347,10.015a5.177,5.177,0,0,1-2.3-.688l-.065-.716a6.987,6.987,0,0,0-2.447-4.73,5.2,5.2,0,0,1,.906-2.105A9.239,9.239,0,0,1,22.2,8.409l.146,1.605v0Z" transform="translate(132.827 147.342)" fill="#929bb5" />
                                                <path id="Shape-2" data-name="Shape" d="M5.2,10.4a5.2,5.2,0,1,1,5.2-5.2A5.2,5.2,0,0,1,5.2,10.4Z" transform="translate(150.277 146.97)" fill="#ff6359" />
                                            </g>
                                        </svg>

                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                            <g id="Group_2" data-name="Group 2" transform="translate(-368 -191.534)">
                                                <rect id="view-box" width="35" height="35" transform="translate(368 191.534)" fill="none" />
                                                <path id="Shape" d="M15.459,28.036a13.888,13.888,0,0,1-6.133-1.41,14.217,14.217,0,0,1-7.011,1.41c-.4,0-.831-.009-1.276-.026A1.063,1.063,0,0,1,.1,27.389a1.061,1.061,0,0,1,.122-1.114A16.089,16.089,0,0,0,3.2,20.83,14.023,14.023,0,0,1,18.234.276a7.876,7.876,0,0,0-.972,2.018A11.864,11.864,0,0,0,5.275,20.1a1.078,1.078,0,0,1,.132.769,14.649,14.649,0,0,1-2.24,4.992A10.349,10.349,0,0,0,8.654,24.5a1.073,1.073,0,0,1,.62-.2,1.086,1.086,0,0,1,.515.131A11.867,11.867,0,0,0,27.182,12.214a7.875,7.875,0,0,0,2.018-.972A14.025,14.025,0,0,1,15.459,28.036Zm4.313-10.064H9.707a1.079,1.079,0,0,1,0-2.157H19.771a1.079,1.079,0,0,1,0,2.157ZM16.9,12.22H9.707a1.078,1.078,0,1,1,0-2.156H16.9a1.078,1.078,0,1,1,0,2.156ZM26.4,9.444h0a11.991,11.991,0,0,0-6.37-6.369A5.07,5.07,0,0,1,21.155,1.21a14.051,14.051,0,0,1,7.111,7.11A5.071,5.071,0,0,1,26.4,9.444Z" transform="translate(369.794 195.263)" fill="#929bb5" />
                                                <path id="Shape-2" data-name="Shape" d="M5.032,10.064a5.032,5.032,0,1,1,5.032-5.032A5.032,5.032,0,0,1,5.032,10.064Z" transform="translate(389.566 194.904)" fill="#ff6359" />
                                            </g>
                                        </svg>

                                    </a>
                                </li>
                            </div>
                            <div className="profile_info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                                <div className="profile_info_iner">
                                    <p>Welcome Admin!</p>
                                    <h5>Travor James</h5>
                                    <div className="profile_info_details">
                                        <a href="#">My Profile <i className="ti-user"></i></a>
                                        <a href="#">Settings <i className="ti-settings"></i></a>
                                        <a href="#">Log Out <i className="ti-shift-left"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_content_iner " >
                <div className="container-fluid plr_30 body_white_bg pt_30">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="single_element">
                                <div className="quick_activity">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="quick_activity_wrap">
                                                <div className="single_quick_activity">
                                                    <h4>Total Income</h4>
                                                    <h3>$ <span className="counter">5,79,000</span> </h3>
                                                    <p>Saved 25%</p>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4>Total Expences</h4>
                                                    <h3>$ <span className="counter">79,000</span> </h3>
                                                    <p>Saved 25%</p>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4>Cash on Hand</h4>
                                                    <h3>$ <span className="counter">92,000</span> </h3>
                                                    <p>Saved 25%</p>
                                                </div>
                                                <div className="single_quick_activity">
                                                    <h4>Net Profit Margin</h4>
                                                    <h3>$ <span className="counter">1,79,000</span> </h3>
                                                    <p>Saved 65%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="white_box mb_30 min_430">
                                <div className="box_header  box_header_block ">
                                    <div className="main-title">
                                        <h3 className="mb-0">AP and AR Balance</h3>
                                        <span>Avg. $5,309</span>
                                    </div>
                                    <div className="box_select d-flex">
                                        <select className="nice_Select2 mr_5">
                                            <option value="1">Monthly</option>
                                            <option value="1">Monthly</option>
                                        </select>
                                        <select className="nice_Select2 ">
                                            <option value="1">Last Year</option>
                                            <option value="1">this Year</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="bar_active"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 ">
                            <div className="white_box mb_30 min_430">
                                <div className="box_header  box_header_block">
                                    <div className="main-title">
                                        <h3 className="mb-0">% of Income Budget</h3>
                                    </div>
                                </div>
                                <div id="radial_2"></div>
                                <div className="radial_footer">
                                    <div className="radial_footer_inner d-flex justify-content-between">
                                        <div className="left_footer">
                                            <h5>
                                                <span style={{ backgroundColor: '#A4A1FB' }}></span> Blance</h5>
                                            <p>-$18,570</p>
                                        </div>
                                        <div className="left_footer">
                                            <h5> <span style={{ backgroundColor: '#A4A1FB' }}></span> Blance</h5>
                                            <p>$31,430</p>
                                        </div>
                                    </div>
                                    <div className="radial_bottom">
                                        <p><a href="#">View Full Report</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="white_box min_430">
                                <div className="box_header  box_header_block">
                                    <div className="main-title">
                                        <h3 className="mb-0">% of Expenses Budget</h3>
                                    </div>
                                </div>
                                <div id="radial_1"></div>
                                <div className="radial_footer">
                                    <div className="radial_footer_inner d-flex justify-content-between">
                                        <div className="left_footer">
                                            <h5> <span style={{ backgroundColor: '#A4A1FB' }}></span> Blance</h5>
                                            <p>-$18,570</p>
                                        </div>
                                        <div className="left_footer">
                                            <h5> <span style={{ backgroundColor: '#A4A1FB' }}></span> Blance</h5>
                                            <p>$31,430</p>
                                        </div>
                                    </div>
                                    <div className="radial_bottom">
                                        <p><a href="#">View Full Report</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="white_box mb_30 min_430">
                                <div className="box_header  box_header_block">
                                    <div className="main-title">
                                        <h3 className="mb-0">EBIT (Earnings Before Interest & Tax)</h3>
                                    </div>
                                </div>
                                <canvas height="200" id="visit-sale-chart"></canvas>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="white_box mb_30 min_430">
                                <div className="box_header  box_header_block align-items- ">
                                    <div className="main-title">
                                        <h3 className="mb-0">Cost of goods / Services</h3>
                                    </div>
                                    <div className="title_info">
                                        <p>1 Jan 2020 to 31 Dec 2020 <br />
                                            <div className="legend_style text-end">
                                                <li> <span style={{ backgroundColor: '#A4A1FB' }}></span> Services</li>
                                                <li className="inactive"> <span style={{ backgroundColor: '#A4A1FB' }}></span> Avarage</li>
                                            </div> </p>
                                    </div>
                                </div>
                                <canvas height="200" id="visit-sale-chart2"></canvas>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="white_box mb_30 min_400">
                                <div className="box_header ">
                                    <div className="main-title">
                                        <h3 className="mb-0">Disputed vs Overdue Invoices</h3>
                                    </div>
                                </div>
                                <canvas height="220px" id="doughutChart"></canvas>
                                <div className="legend_style mt_10px ">
                                    <li className="d-block"> <span style={{ backgroundColor: '#DF67C1' }} ></span> Disputed Invoices</li>
                                    <li className="d-block"> <span style={{ backgroundColor: '#6AE0BD' }}></span> Avarage</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="white_box mb_30 min_400 ">
                                <div className="box_header  box_header_block">
                                    <div className="main-title">
                                        <h3 className="mb-0">Disputed Invoices</h3>
                                    </div>
                                    <div className="legend_style mt-10">
                                        <li> <span></span> Disputed Invoices</li>
                                        <li className="inactive"> <span></span> Avarage</li>
                                    </div>
                                </div>
                                <div className="title_btn">
                                    <ul>
                                        <li><a className="active" href="#">All time</a></li>
                                        <li><a href="#">This year</a></li>
                                        <li><a href="#">This week</a></li>
                                        <li><a href="#">Today</a></li>
                                    </ul>
                                </div>
                                <canvas height="120px" id="sales-chart"></canvas>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                            <div className="white_box mb_30 min_400">
                                <div className="box_header  box_header_block">
                                    <div className="main-title">
                                        <h3 className="mb-0">Disputed vs Overdue Invoices</h3>
                                    </div>
                                </div>
                                <canvas height="220px" id="doughutChart2"></canvas>
                                <div className="legend_style legend_style_grid mt_10px">
                                    <li className="d-block"> <span style={{ backgroundColor: "#FF7B36" }}></span> 30 Days</li>
                                    <li className="d-block"> <span style={{ backgroundColor: "#E8205E" }}></span> 60 Days</li>
                                    <li className="d-block"> <span style={{ backgroundColor: "#3B76EF" }}></span> 90 Days</li>
                                    <li className="d-block"> <span style={{ backgroundColor: "#00BFBF" }}></span> 90+Days</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="white_box min_400">
                                <div className="box_header  box_header_block">
                                    <div className="main-title">
                                        <h3 className="mb-0">EBIT (Earnings Before Interest & Tax)</h3>
                                    </div>
                                    <div className="title_info">
                                        <p>1 Jan 2020 to 31 Dec 2020</p>
                                    </div>
                                </div>
                                <div id="area_active"></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="white_box mb_30 min_400">
                                <div className="box_header ">
                                    <div className="main-title">
                                        <h3 className="mb-0">Inventory Turnover</h3>
                                    </div>
                                </div>
                                <div id="stackbar_active"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHome;