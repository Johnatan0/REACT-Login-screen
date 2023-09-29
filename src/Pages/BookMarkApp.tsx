import {GlobalBookMarkStyle, SideBarMenu, SideBar, Main, User, UserEmail, UserName, SideBarItem, MainHeader, MainHeaderTitle, AddButton, MainHeaderNav, MainNavItem, MainContent} from './BookMarkStyles';

export default function BookMarkApp() {
    return (
    <>
    <GlobalBookMarkStyle/>
    <SideBar>
        <User>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80" alt="user photo"/>
        <UserName>Alexandre</UserName>
        <UserEmail>alexander@email.com</UserEmail>
        </User>
        <SideBarMenu>
            <SideBarItem>Design</SideBarItem>
            <SideBarItem>Barbecue</SideBarItem>
            <SideBarItem>Productivity</SideBarItem>
            <SideBarItem>Workout</SideBarItem>
            <SideBarItem>Book</SideBarItem>
            <SideBarItem>Snack</SideBarItem>
        </SideBarMenu>
    </SideBar>

    <Main>
        <MainHeader>
            <MainHeaderTitle>Productivity</MainHeaderTitle>
            <AddButton>+</AddButton>
        </MainHeader>
        <MainHeaderNav>
            <MainNavItem>All</MainNavItem>
            <MainNavItem>Videos</MainNavItem>
            <MainNavItem>Notes</MainNavItem>
            <MainNavItem>Music</MainNavItem>
            <MainNavItem>To-do</MainNavItem>
        </MainHeaderNav>

        <MainContent>
        </MainContent>

    </Main>
    </>
    )
}