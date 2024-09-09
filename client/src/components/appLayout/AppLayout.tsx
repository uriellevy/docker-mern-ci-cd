import { AppShell, Burger, Container, NavLink, Switch, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { NavLink as RouterNavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdSunny, MdOutlineStarPurple500, MdFastfood, MdOutlineDoorSliding, MdOutlineContactPage, MdOutlineAddCircleOutline } from "react-icons/md";
import { FaMoon, FaUsers } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { SiFoodpanda } from "react-icons/si";
import classes from "./AppLayout.module.scss"
import { UserButton } from '../userButton.tsx/UserButton';
import { CONSTS } from '../../consts/consts';

const AppLayout = () => {
    const { toggleColorScheme } = useMantineColorScheme();
    const [opened, { toggle, close }] = useDisclosure();

    const theme = useMantineTheme();

    const sunIcon = (
        <MdSunny
            color={theme.colors.yellow[4]}
            size={"1rem"}
        // onClick={toggleColorScheme}
        />
    );

    const moonIcon = (
        <FaMoon
            color={theme.colors.blue[6]}
            // onClick={toggleColorScheme}
            size={"1rem"}
        />
    );

    return (
        <div className={classes.appLayoutContainer}>
            <AppShell
                header={{ height: 65 }}
                navbar={{
                    width: 270,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header className={classes.headerWrapper}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Container className={classes.logoContainer}>
                        <SiFoodpanda size={"2.5rem"} className={classes.appLogo} />
                        <Title order={3}>{CONSTS.APP_HEADER_NAME}</Title>
                    </Container>
                    <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} onChange={toggleColorScheme} className={classes.switchToggler} />
                </AppShell.Header>

                <AppShell.Navbar p="md" className={classes.navbarWrapper}>
                    <NavLink
                        to="/"
                        label="Home"
                        leftSection={<FaHome size="1rem" />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/recipes"
                        label="Recipes"
                        leftSection={<MdFastfood />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/login"
                        label="Login"
                        leftSection={<MdOutlineDoorSliding />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/signup"
                        label="Signup"
                        leftSection={<MdOutlineContactPage />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/myRecipes"
                        label="My Recipes"
                        leftSection={<SiFoodpanda />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/favorites"
                        label="Favorites"
                        leftSection={<MdOutlineStarPurple500 />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/users"
                        label="Users"
                        leftSection={<FaUsers />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        to="/newRecipe"
                        label="New Recipe"
                        leftSection={<MdOutlineAddCircleOutline />}
                        component={RouterNavLink}
                        onClick={close}
                    />
                    <NavLink
                        label="Logout"
                        leftSection={<BiSolidExit />}
                    />
                    <div className={classes.userProfile}>
                        <UserButton />
                    </div>
                </AppShell.Navbar>

                <AppShell.Main><Outlet /></AppShell.Main>
            </AppShell>

        </div>
    )
}

export default AppLayout