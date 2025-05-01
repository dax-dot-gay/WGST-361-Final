import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { SceneManager } from "./components/SceneManager.tsx";
import { Scenes } from "./Scenes.tsx";
import { CitationPanel } from "./CitationPanel.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        path="/:scene?"
                        element={
                            <SceneManager initial="start">
                                <Scenes />
                            </SceneManager>
                        }
                    />
                    <Route path="/citations" element={<CitationPanel />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
