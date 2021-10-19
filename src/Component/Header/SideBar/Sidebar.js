import React from 'react'
import{ SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink} from './SidebarComponent'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="product" onClick={toggle}>product</SidebarLink>
                    <SidebarLink to="categories" onClick={toggle}>categories</SidebarLink>
                    <SidebarLink to="Partner" onClick={toggle}>Parter</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
