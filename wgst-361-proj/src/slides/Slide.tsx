import { Stack, Group, Title, Divider, ScrollAreaAutosize } from "@mantine/core";
import { ReactNode } from "react";
import { MdArrowRight } from "react-icons/md";
import { Scene, SceneButton } from "../components/SceneManager";

export function Slide({
    name,
    next,
    title,
    children,
}: {
    name: string;
    next?: string;
    title: string;
    children?: ReactNode | ReactNode[];
}) {
    return (
        <Scene name={name}>
            <Stack p={0} gap={0} w="100%" h="100%">
                <Group gap="sm" justify="space-between" p="sm">
                    <Title order={2} ff="monospace">
                        {title}
                    </Title>
                    {next && (
                        <SceneButton size="md" rightSection={<MdArrowRight size={20} />} target={next}>
                            Continue
                        </SceneButton>
                    )}
                </Group>
                <Divider />
                <ScrollAreaAutosize mah="calc(100vh - 250px)">
                    <Stack gap="sm" p="sm" w="100%">
                        {children}
                    </Stack>
                </ScrollAreaAutosize>
            </Stack>
        </Scene>
    );
}
