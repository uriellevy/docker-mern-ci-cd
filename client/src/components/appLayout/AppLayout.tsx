import { AppShell, Burger, NavLink, Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { NavLink as RouterNavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const AppLayout = () => {
    const { toggleColorScheme } = useMantineColorScheme();
    const [opened, { toggle }] = useDisclosure();

    const theme = useMantineTheme();

    const sunIcon = (
        <MdSunny
            color={theme.colors.yellow[4]}
            onClick={() => toggleColorScheme}
        />
    );

    const moonIcon = (
        <FaMoon
            color={theme.colors.blue[6]}
            onClick={() => toggleColorScheme}
        />
    );

    return (
        <div className='navContainer'>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <div>Logo</div>
                    <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon}/>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <NavLink
                        to="/"
                        label="Home"
                        leftSection={<FaHome size="1rem" />}
                        component={RouterNavLink}
                    />
                    <NavLink
                        to="/recipes"
                        label="With icon"
                        leftSection={<FaHome />}
                        component={RouterNavLink}
                    />
                </AppShell.Navbar>

                <AppShell.Main><Outlet /></AppShell.Main>
            </AppShell>

        </div>
    )
}

export default AppLayout