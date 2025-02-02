"use client"
import React from 'react';
import logo from '@/assets/img/logo.png'
import Link from 'next/link';
import Image from 'next/image';
import MainMenu from './MainMenu';
import useSubMenuToggle from '@/hooks/useSubMenuToggle';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarMenu from '@/hooks/useSidebarMenu';

const HeaderV4 = () => {

    const toggleSubMenu = useSubMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar navbar-common mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark ${isMenuSticky ? 'sticked' : 'no-background'} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header py-2">
                            <Link className="navbar-brand" href="/">
                                <Image src={logo} className="logo" alt="Logo" />
                            </Link>
                        </div>

                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <Image src={logo} className="logo" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times"></i>
                            </button>
                            <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="contact">
                                        <div className="call">
                                            {/* <div className="icon">
                                                <i className="fas fa-comments-alt-dollar"></i>
                                            </div> */}
                                            <div className="info">
                                                
                                                <p>Have any Questions?</p>
                                                <Link className="btn btn-gradient btn-sm mt-20" href="/contact-us">Let's Meet</Link>
                                                {/* <h5><a href="mailto:info@crysta.com">hello@graphenelabs.io</a></h5> */}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-screen"></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;