/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Button,
    ButtonProps,
    PolymorphicComponentProps,
} from "@mantine/core";
import {
    createContext,
    ReactNode,
    Ref,
    useCallback,
    useContext,
    useImperativeHandle,
    useState,
} from "react";

type SceneManagerContextType = {
    currentScene: string;
    goTo: (scene: string) => void;
};
const SceneManagerContext = createContext<SceneManagerContextType>(null as any);

export function useScenes(): [string, (scene: string) => void] {
    const { currentScene, goTo } = useContext(SceneManagerContext);

    return [currentScene, goTo];
}

export function SceneManager({
    children,
    initial,
    ref,
}: {
    children: ReactNode[] | ReactNode;
    initial: string;
    ref: Ref<{ goTo: (scene: string) => void; reset: () => void }>;
}) {
    const [scene, setScene] = useState(initial);
    const goTo = useCallback(
        (scene: string) => {
            setScene(scene);
        },
        [setScene]
    );

    useImperativeHandle(
        ref,
        () => {
            return {
                goTo,
                reset: () => goTo(initial),
            };
        },
        [goTo, initial]
    );

    return (
        <SceneManagerContext value={{ goTo, currentScene: scene }}>
            <Box className="scene-manager" data-scene={scene}>
                {children}
            </Box>
        </SceneManagerContext>
    );
}

export function Scene({
    name,
    children,
}: {
    name: string;
    children?: ReactNode | ReactNode[];
}) {
    const context = useContext(SceneManagerContext);

    return (
        <Box
            className="scene"
            id={`scene-${name}`}
            display={name === context.currentScene ? "block" : "none"}
        >
            {children}
        </Box>
    );
}

export function SceneButton({
    target,
    children,
    ...props
}: {
    target: string;
    children?: ReactNode | ReactNode[];
} & Partial<PolymorphicComponentProps<"button", ButtonProps>>) {
    const context = useContext(SceneManagerContext);
    const onClick = useCallback(
        (event: any) => {
            if (props.onClick) {
                props.onClick(event);
            }

            context.goTo(target);
        },
        [target, props.onClick, context.goTo]
    );

    return (
        <Button {...props} onClick={onClick}>
            {children}
        </Button>
    );
}
