import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Alert, Group, Stack, Text } from "@mantine/core";
import { Slide } from "./Slide";
import { TbExclamationCircleFilled, TbHeartFilled, TbLanguage } from "react-icons/tb";
import { Cite, CitationSummary } from "../components/Citations";

export function Slide2() {
    return (
        <Slide name="slide-2" next="slide-3" title="Gender/Sexual Normativity as a Facet of Colonialism">
            <Text>
                The assimilation of indigenous peoples and cultures as a result of colonization is a well-understood practice,
                with effects propagating through almost every facet of Western culture. In a very real sense, the "first world"
                and its ideals are colonialism incarnate -- Western society positions itself as the "end of history", an imposed
                assumption of perfection that many use to justify continued assimilation efforts. What is less frequently
                acknowledged, however, is the effects that a colonizer will have on the values & ideals of those who it
                assimilates, often through more indirect means than they might assimilate land or other physical resources.
                While this can take a number of forms, several relevant to gender and sexuality are described below.
            </Text>
            <Accordion variant="separated" defaultValue={["f1"]} multiple>
                <AccordionItem value="f1">
                    <AccordionControl icon={<TbLanguage size={24} />}>Assimilation of Language</AccordionControl>
                    <AccordionPanel>
                        <Stack gap="sm">
                            <Text>
                                Across the political & social spectrum in Western culture, it is a common practice to apply
                                Western linguistic frameworks (currently that of American English, in much of the world) to the
                                process of describing the experiences of those suffering from colonization. This practice has
                                been described as "rhetorical imperialism," a process by which colonizing powers "[set] the
                                terms of debate" <Cite cite={4} name="Ellasante" page={1509} />. A particularly relevant example
                                of this practice in the queer space is the categorization of Two-Spirit individuals (among
                                others, such as <em>Takatāpui</em>, <em>Fa’afafine</em>, and more) under the umbrella of
                                "transgender," despite their distinct differences from that predominantly Western concept{" "}
                                <Cite cite={6} name="Bres" page={31} />. The argument can be made that this may help the Western
                                audience to understand these concepts more easily, but in reality it more often leads to
                                wide-ranging redefinition of indigenous language that fails to even remotely describe the
                                appropriate context.
                            </Text>
                            <CitationSummary
                                cite={4}
                                title="Radical Sovereignty, Rhetorical Borders, and the Everyday Decolonial Praxis of Indigenous Peoplehood and Two-Spirit Reclamation"
                                author="Ian Khara Ellasante"
                            >
                                In <em>Radical Sovereignty</em>, Ellasante details in great depth the concepts of "rhetorical
                                sovereignty" and "rhetorical imperialism" -- concepts crucial to understanding colonization as
                                it applies to the linguistic basis of cultures undergoing colonization. They use the example of
                                Two-Spirit individuals as a centerpoint in this discussion, illuminating its status as a term
                                meant to "challenge the settler-defined" language that has intertwined itself into the
                                understanding of LGBTQ experiences <Cite cite={4} name="Ellasante" page={1519} />. In short,
                                they argue that rhetorical imperialism is a key tool in eliminating indigenous agency, which can
                                be strongly connected to other more obvious efforts by settler states to deny the nationhood of
                                those they've colonized.
                            </CitationSummary>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="f2">
                    <AccordionControl icon={<TbHeartFilled size={24} />}>Assimilation of Sexuality</AccordionControl>
                    <AccordionPanel>
                        <Stack gap="sm">
                            <Text>
                                In addition to rhetorical assimilation, colonizing forces generally seek to impose their own
                                values on those they assimilate. In most cases, these ideals are fundamentally incompatible with
                                said cultures, resulting in the cultural ideals of indigenous groups being forcibly altered,
                                repurposed, or even erased entirely. A chief example of this is the increased frequency of
                                sexual violence and sexism in American Indian reservations in the US, grim reflections of the
                                extreme levels of sexism and abuse endemic to American culture{" "}
                                <Cite cite={5} name="Driskill" page={53} />.
                            </Text>
                            <Group gap="sm" wrap="nowrap" align="start">
                                <CitationSummary
                                    cite={5}
                                    title="Stolen From Our Bodies: First Nations Two-Spirits/Queers and the Journey to a Sovereign Erotic"
                                    author="Qwo-li Driskill"
                                >
                                    In this piece, Driskill condemns the imposition of colonial sexual values on the Cherokee,
                                    and by extension all others that have been subject to the specter of Western imperialism.
                                    They focus especially on the concept of “sovereign eroticism,” highlighting the damaging
                                    influence that this “colonized sexuality” has had on the Cherokee culture and system of
                                    values <Cite cite={5} name="Driskill" page={54} />. The piece as a whole quite effectively
                                    conveys the centuries of colonial trauma that indigenous communities have suffered from the
                                    colonization of their most basic systems of values, which can be easily extrapolated to the
                                    great breadth of other atrocities committed against indigenous people – in America and
                                    internationally.
                                </CitationSummary>
                                <Alert
                                    icon={<TbExclamationCircleFilled size={20} />}
                                    title="Qwo-Li Driskill: Controversies"
                                    color="yellow"
                                >
                                    Based on significant controversy in November of 2023, Qwo-Li Driskill is suspected to be a
                                    "pretendian," or an individual who claims indigenous ancestry for personal or monetary
                                    purposes. Despite this, however, several points made by Driskill's paper are salient when
                                    validated against other sources, and so remain useful to this section.
                                </Alert>
                            </Group>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Slide>
    );
}
