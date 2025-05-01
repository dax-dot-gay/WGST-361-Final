import {
    Alert,
    AlertProps,
    Anchor,
    Badge,
    Center,
    Divider,
    Group,
    Image,
    ImageProps,
    Paper,
    PaperProps,
    PolymorphicComponentProps,
    Stack,
    Text,
} from "@mantine/core";
import { ReactNode } from "react";
import { MdLink, MdTextSnippet } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";

export function Citation({
    citeKey,
    title,
    url,
    children,
}: {
    citeKey: number;
    title: string;
    url: string;
    children?: ReactNode | ReactNode[];
}) {
    const fragment = useLocation().hash;
    return (
        <Paper
            className={`citation-item${fragment === `#cite-${citeKey}` ? " selected" : ""}`}
            id={`cite-${citeKey}`}
            onClick={() => window.open(url, "_blank")}
            withBorder
            radius="sm"
            p={0}
        >
            <Stack gap={0}>
                <Group gap={0} wrap="nowrap" p={0}>
                    <Center w="48px" h="48px">
                        <Text size="lg" fw="bold">
                            {citeKey}
                        </Text>
                    </Center>
                    <Divider orientation="vertical" />
                    <Text pl="md" size="lg">
                        {title}
                    </Text>
                </Group>
                <Divider />
                <Text p="sm">{children}</Text>
            </Stack>
        </Paper>
    );
}

export function Cite({ cite, name, page }: { cite: number; name: string; page?: number }) {
    const nav = useNavigate();
    return (
        <Anchor underline="hover" onClick={() => nav(`/citations#cite-${cite}`)}>
            ({name}
            {page === undefined ? "" : ` ${page}`})
        </Anchor>
    );
}

export function CitationSummary({
    cite,
    title,
    author,
    children,
    ...props
}: {
    cite: number;
    title: string;
    author: string;
    children?: ReactNode | ReactNode[];
} & Partial<AlertProps>) {
    const nav = useNavigate();
    return (
        <Alert
            color="gray"
            icon={<MdTextSnippet size={24} />}
            title={
                <Stack gap={0}>
                    <Text size="sm" fw="bold">
                        {title}
                    </Text>
                    <Text size="xs">{author}</Text>
                </Stack>
            }
            className="citation-summary"
            onClick={() => nav(`/citations#cite-${cite}`)}
            {...props}
        >
            {children}
        </Alert>
    );
}

export function CitedImage({
    cite,
    author,
    page,
    caption,
    src,
    imgProps,
    ...props
}: {
    cite: number;
    author: string;
    page?: number;
    caption?: string;
    src: string;
    imgProps?: Partial<PolymorphicComponentProps<"img", ImageProps>>;
} & Partial<PolymorphicComponentProps<"div", PaperProps>>) {
    const nav = useNavigate();
    return (
        <Paper className="cited-image" radius="sm" p={0} {...props} withBorder>
            <Stack align="center" gap={0}>
                <Image src={src} {...imgProps} />
                <Group justify="space-between" w="100%" p="sm">
                    {caption ? <Text>{caption}</Text> : <span></span>}
                    <Badge
                        size="md"
                        leftSection={<MdLink size={16} />}
                        className="cited-image-source"
                        onClick={() => nav(`/citations#cite-${cite}`)}
                    >
                        {author}
                        {page === undefined ? "" : ` ${page}`}
                    </Badge>
                </Group>
            </Stack>
        </Paper>
    );
}
