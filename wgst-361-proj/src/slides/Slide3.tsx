import { Alert, Divider, Group, Text, Title } from "@mantine/core";
import { Slide } from "./Slide";
import { TbExclamationMark, TbInfoCircleFilled } from "react-icons/tb";
import { CitationSummary, Cite } from "../components/Citations";

export function Slide3() {
    return (
        <Slide name="slide-3" next="conclusion-1" title="Queering Resistance (The Whole Point)">
            <Alert icon={<TbExclamationMark size={20} />} title="So: What Now?" color="green">
                Language and concepts of sex & gender must be intentionally decolonized, and crucially separated from the
                national entities that currently seek to impose artificial rigidity.
            </Alert>
            <Group gap="sm" wrap="nowrap">
                <Alert icon={<TbInfoCircleFilled size={20} />} title="Example: Decolonization of Aotearoa">
                    <Text>
                        The decolonization of heavily westernized trans-affirming language in Aotearoa (New Zealand) serves as a
                        key example of queer gender practices as a means of resistance. The application of "trans," "cis," and
                        other terms has thus far resulted in a dilution of context that loses the "low linguistic prominence" of
                        gender and implicit diversity that is characteristic of the Maori language and worldview{" "}
                        <Cite cite={6} name="Bres" page={31} />. To achieve true decolonization in this case, the Maori
                        community has sought to de-center whiteness and Western privilege in discussions of trans-ness in
                        Aotearoa <Cite cite={6} name="Bres" page={32} />.
                    </Text>
                </Alert>
                <CitationSummary cite={6} title="Decolonising Trans‐Affirming Language in Aotearoa" author="Julia Bres">
                    Over the course of this paper, Bres argues for the decolonization of trans-related language in Aotearoa (New
                    Zealand). She focuses on three primary aspects of this issue, covering the use of Western language to
                    describe indigenous experiences, the necessity of "de-centering whiteness" in trans spaces, and recent
                    efforts by indigenous groups to achieve this end <Cite cite={6} name="Bres" page={30} />. In particular, she
                    highlights the failure of understanding that an association between the "standard" Maori experience and that
                    of Western cisheteronormativity represents.
                </CitationSummary>
            </Group>
            <Divider />
            <Title order={3}>Queer Resistance: Rejection of the State</Title>
            <Text>
                On a more local & personal level, decolonizing queerness as a whole has a large variety of knock-on effects on
                the ongoing struggle against state-based oppression that much of the queer community is currently facing, and
                has faced to some degree for generations. In particular, the current American cultural hegemony is supported
                significantly by its command of <em>language itself</em>, as it defines the terms through which discussions both
                social and political are had. In a very real way, the English understanding of queerness currently defines its
                global understanding to an incredible degree, allowing the American empire to dictate the very identities of
                those subject to its power. Thus, a rejection of this hegemonic control would significantly weaken American
                command of the concepts of queerness, gender and sexuality. This does not necessarily require rejecting the
                terms themselves, but instead refusing to allow the terms to serve as a means of categorization, as well as
                rejecting their use as universal signifiers of a non-universal experience.
            </Text>
        </Slide>
    );
}
