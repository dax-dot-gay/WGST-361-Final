/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Center,
    Group,
    Loader,
    Select,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { useMap } from "@mantine/hooks";
import { Scene, SceneButton, useScenes } from "./components/SceneManager";
import { MdCheck, MdClose, MdLocationPin } from "react-icons/md";
import { useCallback, useEffect } from "react";
import { TbMoodAngryFilled, TbMoodSadFilled } from "react-icons/tb";

function useInputs(): [
    <T = any>(name: string, fallback?: T) => T | null,
    <T = any>(name: string, value: T) => void
] {
    const fields: Map<string, any> = useMap([]);

    const getValue = useCallback(
        (name: string, fallback?: any) => {
            const val = fields.get(name);
            if (val === undefined) {
                if (fallback === undefined) {
                    return null;
                } else {
                    return fallback;
                }
            } else {
                return val;
            }
        },
        [fields]
    );

    const setValue = useCallback(
        (name: string, value: any) => {
            fields.set(name, value);
        },
        [fields]
    );

    return [getValue, setValue];
}

export function Scenes() {
    const [scene, setScene] = useScenes();
    const [field, setField] = useInputs();

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
            case "exiting-2":
                setTimeout(
                    () =>
                        window.open(
                            "https://en.wikipedia.org/wiki/Lie",
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
            <Scene name="exiting-2">
                <Center w="100%" h="100%">
                    <Group gap="sm">
                        <Loader type="dots" />
                        <Title ff="monospace" order={2} fw={500}>
                            Ah, you may be missing some of the supporting
                            material. Please wait...
                        </Title>
                    </Group>
                </Center>
            </Scene>
            <Scene name="start-2">
                <Stack
                    gap="md"
                    align="center"
                    justify="center"
                    h="100%"
                    w="100%"
                >
                    <Title order={2} ff="monospace">
                        Where do you live?
                    </Title>
                    <Select
                        w="50%"
                        miw="480px"
                        leftSection={<MdLocationPin size={20} />}
                        size="lg"
                        placeholder="Make your selection!"
                        data={[
                            {
                                value: "The United States",
                                label: "The United States",
                                disabled: true,
                            },
                            ...Array(20)
                                .fill(0)
                                .map((_, i) => ({
                                    value: `choice${i}`,
                                    label: "STOLEN LAND",
                                })),
                        ]}
                        value={field<string | null>("start-2.location")}
                        onChange={(value) =>
                            setField("start-2.location", value)
                        }
                    />
                    {field("start-2.location") !== null && (
                        <Group gap="sm">
                            <SceneButton
                                size="md"
                                leftSection={<MdCheck size={20} />}
                                target="start-3"
                            >
                                Continue
                            </SceneButton>
                            <SceneButton
                                size="md"
                                leftSection={<TbMoodSadFilled size={20} />}
                                target="sidebar-1"
                                color="orange"
                            >
                                Not my fault!
                            </SceneButton>
                            <SceneButton
                                size="md"
                                leftSection={<TbMoodAngryFilled size={20} />}
                                target="exiting-2"
                                color="red"
                            >
                                This isn't a game...
                            </SceneButton>
                        </Group>
                    )}
                </Stack>
            </Scene>
        </>
    );
}
