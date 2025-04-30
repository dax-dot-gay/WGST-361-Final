/* eslint-disable @typescript-eslint/no-unused-vars */
import { Center, Group, Loader, Stack, Text, Title } from "@mantine/core";
import { Scene, SceneButton, useScenes } from "./components/SceneManager";
import { MdCheck, MdClose } from "react-icons/md";
import { useEffect } from "react";

export function Scenes() {
    const [scene, setScene] = useScenes();

    useEffect(() => {
        switch (scene) {
            case "exiting-1":
                setTimeout(
                    () =>
                        window.open(
                            "https://www.imdb.com/title/tt0086567/",
                            "_self"
                        ),
                    2000
                );
                break;
            default:
                break;
        }
    }, [scene]);

    return (
        <>
            <Scene name="start">
                <Stack
                    gap="sm"
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                >
                    <Title ff="monospace" order={2} fw={500}>
                        Would you like to play a game?
                    </Title>
                    <Group gap="sm" justify="center">
                        <SceneButton
                            size="md"
                            leftSection={<MdCheck size={20} />}
                            target="start-2"
                        >
                            Yes, please!
                        </SceneButton>
                        <SceneButton
                            size="md"
                            leftSection={<MdClose size={20} />}
                            target="exiting-1"
                            color="red"
                        >
                            Can't fool me &gt;:3
                        </SceneButton>
                    </Group>
                </Stack>
            </Scene>
            <Scene name="exiting-1">
                <Center w="100%" h="100%">
                    <Group gap="sm">
                        <Loader />
                        <Title ff="monospace" order={2} fw={500}>
                            Well aren't you clever.
                        </Title>
                    </Group>
                </Center>
            </Scene>
        </>
    );
}
