import {
    Button,
    createTheme,
    Group,
    MantineProvider,
    Paper,
    Space,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import "./style.scss";
import { GiAnarchy } from "react-icons/gi";
import { MdChevronRight, MdCollectionsBookmark } from "react-icons/md";
import { useRef } from "react";
import { Outlet, useNavigate } from "react-router";

export function App() {
    const sceneRef = useRef<{
        goTo: (scene: string) => void;
        reset: () => void;
    }>(null as any);

    const nav = useNavigate();

    return (
        <MantineProvider
            defaultColorScheme="dark"
            theme={createTheme({
                white: "#ffffff",
                headings: {
                    fontFamily: "monospace",
                },
            })}
        >
            <Stack gap={0} className="layout-stack" p="md" align="center">
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
                    <Group
                        gap="xl"
                        className="title-content"
                        pl="lg"
                        justify="space-between"
                        pr={4}
                    >
                        <Group gap="xl" className="title-header">
                            <GiAnarchy size={48} color="white" />
                            <Stack gap={0} ml="48px">
                                <Title ml="32px" order={2}>
                                    Queering Gender
                                </Title>
                                <Text size="md" c="dimmed">
                                    As Resistance Against Empire
                                </Text>
                            </Stack>
                        </Group>
                        <Button
                            className="citations-button"
                            variant="light"
                            leftSection={<MdCollectionsBookmark size={20} />}
                            size="lg"
                            onClick={() => nav("/citations")}
                        >
                            Citations
                        </Button>
                    </Group>
                </Paper>
                <Paper
                    p="sm"
                    pt="24px"
                    radius="md"
                    shadow="sm"
                    className="title-nameplate"
                >
                    <Group gap="sm">
                        <Text fw="bold">WGST-361</Text>
                        <MdChevronRight
                            style={{ transform: "translate(0, 2px)" }}
                            size={20}
                        />
                        <Text>Dax Harris</Text>
                    </Group>
                </Paper>
                <Space h="sm"></Space>
                <Paper className="main-content" withBorder p={0} radius="md">
                    <Outlet context={sceneRef} />
                </Paper>
            </Stack>
        </MantineProvider>
    );
}
