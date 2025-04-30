import {
    Box,
    createTheme,
    Group,
    MantineProvider,
    Paper,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import "./style.scss";
import { GiAnarchy } from "react-icons/gi";
import { MdChevronRight, MdModeEdit } from "react-icons/md";

export function App() {
    return (
        <MantineProvider
            defaultColorScheme="dark"
            theme={createTheme({
                white: "#ffffff",
            })}
        >
            <Stack gap="sm" className="layout-stack" p="md">
                <Paper p="md" className="title-card" radius="md" shadow="md">
                    <img
                        className="title-flag trans"
                        src="/assets/img/flag-trans.png"
                    />
                    <img
                        className="title-flag nb"
                        src="/assets/img/flag-nb.jpg"
                    />
                    <img
                        className="title-flag genderqueer"
                        src="/assets/img/flag-genderqueer.png"
                    />
                    <Group gap="xl" className="title-content" pl="lg">
                        <GiAnarchy size={48} color="white" />
                        <Stack gap={0} ml="84px">
                            <Title order={2}>Queering Gender</Title>
                            <Text size="md" c="dimmed">
                                As Resistance Against Empire
                            </Text>
                        </Stack>
                    </Group>
                </Paper>
                <Paper p="sm" radius="md" shadow="sm">
                    <Group gap="sm">
                        <Text fw="bold">WGST-361</Text>
                        <MdChevronRight
                            style={{ transform: "translate(0, 2px)" }}
                            size={20}
                        />
                        <Text>Dax Harris</Text>
                    </Group>
                </Paper>
                <Box className="main-content"></Box>
            </Stack>
        </MantineProvider>
    );
}
