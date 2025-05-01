import { Autocomplete, Button, Center, Group, Loader, Paper, Select, Stack, Text, Title, Tooltip } from "@mantine/core";
import { useMap } from "@mantine/hooks";
import { Scene, SceneButton } from "./components/SceneManager";
import { MdCheck, MdClose, MdFlag, MdLocationPin, MdPerson } from "react-icons/md";
import { useCallback } from "react";
import { TbMoodAngryFilled, TbMoodAnnoyed, TbMoodHappyFilled, TbMoodSadFilled } from "react-icons/tb";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";

const ALLOWED_NAMES = [
    "henry lee tyler",
    "george caldwell",
    "alice smith",
    "lon brown",
    "cornelius vanderbilt",
    "miriam jones",
    "thomas hall",
    "mary cook",
];

function useInputs(): [<T = any>(name: string, fallback?: T) => T | null, <T = any>(name: string, value: T) => void] {
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
    const [field, setField] = useInputs();

    return (
        <>
            <Scene name="start">
                <Stack gap="sm" w="100%" h="100%" align="center" justify="center">
                    <Title ff="monospace" order={2} fw={500}>
                        Would you like to play a game?
                    </Title>
                    <Group gap="sm" justify="center">
                        <SceneButton size="md" leftSection={<MdCheck size={20} />} target="start-2">
                            Yes, please!
                        </SceneButton>
                        <SceneButton
                            size="md"
                            leftSection={<MdClose size={20} />}
                            target="exiting-1"
                            color="red"
                            onClick={() => {
                                setTimeout(() => window.open("https://www.imdb.com/title/tt0086567/", "_self"), 5000);
                            }}
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
                            Ah, you may be missing some of the supporting material. Please wait...
                        </Title>
                    </Group>
                </Center>
            </Scene>
            <Scene name="exiting-3">
                <Center w="100%" h="100%">
                    <Group gap="sm">
                        <Loader type="bars" />
                        <Stack gap="xs">
                            <Title ff="monospace" order={2} fw={500}>
                                Oh, well. I'm ever so sorry, I forgot where you actually lived.
                            </Title>
                            <Title ff="monospace" order={4} fw={400}>
                                Here, let me pull up some relevant information on your non-stolen land.
                            </Title>
                        </Stack>
                    </Group>
                </Center>
            </Scene>
            <Scene name="exiting-4">
                <Center w="100%" h="100%">
                    <Group gap="sm">
                        <Loader type="oval" />
                        <Stack gap="xs">
                            <Title ff="monospace" order={2} fw={500}>
                                I'm sorry we couldn't help you.
                            </Title>
                            <Title ff="monospace" order={4} fw={400}>
                                Relocating you to the Processing Center...
                            </Title>
                        </Stack>
                    </Group>
                </Center>
            </Scene>
            <Scene name="sidebar-1">
                <Center w="100%" h="100%">
                    <Stack gap="sm" align="center" justify="center">
                        <Title ff="monospace" order={2} fw={500}>
                            That doesn't matter.
                        </Title>
                        <Title ff="monospace" order={3} fw={400}>
                            You benefit just the same.
                        </Title>
                        <Group gap="sm">
                            <SceneButton size="md" leftSection={<MdCheck size={20} />} target="start-3">
                                Fair enough.
                            </SceneButton>
                            <SceneButton
                                size="md"
                                leftSection={<TbMoodAngryFilled size={20} />}
                                target="exiting-3"
                                color="red"
                                onClick={() => {
                                    setTimeout(() => window.open("https://http.cat/status/404", "_self"), 5000);
                                }}
                            >
                                I feel mischaracterized!
                            </SceneButton>
                        </Group>
                    </Stack>
                </Center>
            </Scene>
            <Scene name="start-2">
                <Stack gap="md" align="center" justify="center" h="100%" w="100%">
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
                        onChange={(value) => setField("start-2.location", value)}
                    />
                    {field("start-2.location") !== null && (
                        <Group gap="sm">
                            <SceneButton size="md" leftSection={<MdCheck size={20} />} target="start-3">
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
                                onClick={() => {
                                    setTimeout(() => window.open("https://en.wikipedia.org/wiki/Lie", "_self"), 5000);
                                }}
                            >
                                This isn't a game...
                            </SceneButton>
                        </Group>
                    )}
                </Stack>
            </Scene>
            <Scene name="start-3">
                <Stack gap="md" align="center" justify="center" h="100%" w="100%">
                    <Title order={2} ff="monospace">
                        What's your name?
                    </Title>
                    <Autocomplete
                        size="lg"
                        data={[
                            "Henry Lee Tyler",
                            "George Caldwell",
                            "Alice Smith",
                            "Lon Brown",
                            "Cornelius Vanderbilt",
                            "Miriam Jones",
                            "Thomas Hall",
                            "Mary Cook",
                        ]}
                        leftSection={<MdPerson size={20} />}
                        placeholder="Enter your name (names may undergo minimal validation to ease your integration process)"
                        w="50%"
                        miw="480px"
                        value={field<string>("start-3.name", "") ?? ""}
                        onChange={(value) => setField("start-3.name", value)}
                        error={
                            (field<string>("start-3.name", "") ?? "").length === 0
                                ? undefined
                                : ALLOWED_NAMES.includes((field<string>("start-3.name", "") ?? "").toLowerCase())
                                ? undefined
                                : "Please enter a valid name."
                        }
                    />
                    <Group gap="sm">
                        <SceneButton
                            leftSection={<MdCheck size={20} />}
                            target="start-4"
                            disabled={!ALLOWED_NAMES.includes((field<string>("start-3.name", "") ?? "").toLowerCase())}
                        >
                            Accept
                        </SceneButton>
                        <Tooltip label="You know, you should really be thankful for all this charity." color="dark" withArrow>
                            <Button disabled leftSection={<MdClose size={20} />} color="red">
                                But that isn't my name!
                            </Button>
                        </Tooltip>
                    </Group>
                </Stack>
            </Scene>
            <Scene name="start-4">
                <Stack gap="sm" justify="center" align="center" w="100%" h="100%">
                    <Title order={2} ff="monospace">
                        Does this look right?
                    </Title>
                    <Paper withBorder p="sm" radius="sm" w="90%" maw="480px">
                        <Stack gap="sm">
                            <Group gap="sm">
                                <MdPerson size={20} />
                                <Text fw="bold">NAME: </Text>
                                <Text>{field("start-3.name")}</Text>
                            </Group>
                            <Group gap="sm">
                                <MdLocationPin size={20} />
                                <Text fw="bold">LOCATION: </Text>
                                <Text>STOLEN LAND</Text>
                            </Group>
                            <Group gap="sm">
                                <MdFlag size={20} />
                                <Text fw="bold">NATIONALITY: </Text>
                                <Text>American</Text>
                            </Group>
                        </Stack>
                    </Paper>
                    <Group gap="sm" grow w="90%" maw="480px">
                        <SceneButton target="start-5" leftSection={<MdCheck size={20} />}>
                            Yes
                        </SceneButton>
                        <SceneButton
                            target="exiting-4"
                            leftSection={<MdClose size={20} />}
                            color="red"
                            onClick={() => {
                                setTimeout(() => window.open("https://en.wikipedia.org/wiki/Genocide", "_self"), 5000);
                            }}
                        >
                            No
                        </SceneButton>
                    </Group>
                </Stack>
            </Scene>
            <Scene name="start-5">
                <Stack gap="sm" justify="center" align="center" w="100%" h="100%">
                    <Title order={2} ff="monospace">
                        Simple enough. Did you have fun?
                    </Title>
                    <SceneButton leftSection={<MdClose size={20} />} color="red" target="start-6">
                        Not really.
                    </SceneButton>
                </Stack>
            </Scene>
            <Scene name="start-6">
                <Stack gap="sm" justify="center" align="center" w="100%" h="100%">
                    <Title order={2} ff="monospace">
                        Let's see... I have a paper here, it says:
                    </Title>
                    <Title order={4} ff="monospace">
                        "{field("start-3.name")}, you have been ordered by the Court to have fun."
                    </Title>
                    <Title order={4} ff="monospace">
                        So I ask again: Did you have fun?
                    </Title>
                    <SceneButton
                        leftSection={<TbMoodHappyFilled size={28} />}
                        color="green"
                        target="start-7"
                        size="lg"
                        w="240px"
                        justify="space-between"
                    >
                        Yes
                    </SceneButton>
                </Stack>
            </Scene>
            <Scene name="start-7">
                <Stack gap="sm" justify="center" align="center" w="100%" h="100%">
                    <Title order={2} ff="monospace">
                        Glad to hear it.
                    </Title>
                    <SceneButton
                        leftSection={<MdCheck size={28} />}
                        color="green"
                        target="win"
                        size="lg"
                        justify="space-between"
                    >
                        Accept Colonization
                    </SceneButton>
                </Stack>
            </Scene>
            <Scene name="win">
                <Stack gap="sm" justify="center" align="center" w="100%" h="100%">
                    <Title order={2} ff="monospace">
                        You win!
                    </Title>
                    <SceneButton leftSection={<TbMoodAnnoyed size={28} />} target="slide-1" size="md" justify="space-between">
                        That sucked. Can I learn about gender now?
                    </SceneButton>
                </Stack>
            </Scene>
            <Slide1 />
            <Slide2 />
        </>
    );
}
