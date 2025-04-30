import { Paper, PaperProps } from "@mantine/core";
import { Ref, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export function TypingMessage({
    ref,
    message,
    totalTime,
    ...props
}: {
    ref: Ref<unknown>;
    message: string;
    totalTime: number;
} & Partial<PaperProps>) {
    const perLetter = useMemo(
        () => Math.floor(totalTime / message.length),
        [totalTime, message.length]
    );
    const [running, { open: start, close: stop }] = useDisclosure(false);
    const [written, setWritten] = useState("");
    const [index, setIndex] = useState(0);

    const interval = useRef(0);

    useImperativeHandle(
        ref,
        () => {
            return {
                start: () => {
                    setWritten("");
                    setIndex(0);
                    start();
                    interval.current = setInterval(() => {
                        if (running && written.length < message.length) {
                            setWritten((current) => current + message[index]);
                            setIndex((current) => current + 1);
                        } else {
                            clearInterval(interval.current);
                        }
                    }, perLetter);
                },
                finish: () => {
                    setWritten(message);
                    stop();
                    clearInterval(interval.current);
                },
                reset: () => {
                    setWritten("");
                    setIndex(0);
                    stop();
                    clearInterval(interval.current);
                },
            };
        },
        [
            message,
            setWritten,
            start,
            stop,
            perLetter,
            index,
            setIndex,
            running,
            written.length,
        ]
    );

    return <Paper {...props}>{written}</Paper>;
}
