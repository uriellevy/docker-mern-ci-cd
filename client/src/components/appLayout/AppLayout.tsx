import { AppShell, Burger, Container, NavLink, Switch, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { NavLink as RouterNavLink, Outlet, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdSunny, MdOutlineStarPurple500, MdFastfood, MdOutlineDoorSliding, MdOutlineContactPage, MdOutlineAddCircleOutline } from "react-icons/md";
import { FaMoon, FaUsers } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { SiFoodpanda } from "react-icons/si";
import classes from "./AppLayout.module.scss"
import { UserButton } from '../userButton.tsx/UserButton';
import { useLogoutUserMutation } from '../../features/users/UserApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearAuthToken } from '../../features/users/authSlice';
import { notifications } from '@mantine/notifications';
import { useTranslation } from "react-i18next";

const AppLayout = () => {
    const { t } = useTranslation();
    const { toggleColorScheme } = useMantineColorScheme();
    const [opened, { toggle, close }] = useDisclosure();
    const [logoutUser/* , { isLoading, isError, isSuccess } */] = useLogoutUserMutation();
    const token = useSelector((state: RootState) => state.auth.token);
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useMantineTheme();

    const logoutHandler = async () => {
        try {
            const res = await logoutUser();
            dispatch(clearAuthToken());
            navigate("/login");
            notifications.show({
                // @ts-ignore
                title: res.data ? res.data.message : res.error.data.message,
                message: '',
                color: res.error ? "red" : "green",
            })
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    const sunIcon = (
        <MdSunny
            color={theme.colors.yellow[4]}
            size={"1rem"}
        />
    );

    const moonIcon = (
        <FaMoon
            color={theme.colors.blue[6]}
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
                        <Title order={3}>{t("APP_HEADER_NAME")}</Title>
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
                        end
                    />
                    {token ?
                        <>
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
                            {user?.role && user.role === "admin" &&
                                <NavLink
                                    to="/users"
                                    label="Users"
                                    leftSection={<FaUsers />}
                                    component={RouterNavLink}
                                    onClick={close}
                                />
                            }
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
                                onClick={logoutHandler}
                            />
                            {user &&<div className={classes.userProfile}>
                                <UserButton user={user}/>
                            </div>}
                        </>
                        :
                        <>
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
                        </>
                    }
                </AppShell.Navbar>
                <AppShell.Main><Outlet /></AppShell.Main>
            </AppShell>

        </div>
    )
}

export default AppLayout