import { Alert, Divider, Text, Title } from "@mantine/core";
import { Slide } from "./Slide";
import { TbInfoCircleFilled } from "react-icons/tb";
import { Cite } from "../components/Citations";

export function Slide3() {
    return (
        <Slide name="slide-3" next="conclusion-1" title="Queering Resistance (The Whole Point)">
            <Title order={3}>So: What Now?</Title>
            <Text>
                Based on what we've learned up to this point, the conclusion seems clear: the total rejection of the Western
                notion of implied sexual classification, at least as an assumed global default. While personal or social use of
                Western labels remains useful in a solely Western context, the continued attempts to categorize, narrow, and
                divide these labels into distinct groups must be vehemently refused. Simultaneously, greater education on the
                subject of indigenous language and concepts must be provided in order to combat the current dominance of Western
                concepts in many colonized societies. In short: language and concepts of sex & gender must be intentionally
                decolonized, and crucially separated from the national entities that currently seek to impose artificial
                rigidity.
            </Text>
            <Alert icon={<TbInfoCircleFilled size={20} />} title="Example: Decolonization of Aotearoa" color="cyan">
                <Text>
                    The decolonization of heavily westernized trans-affirming language in Aotearoa (New Zealand) serves as a key
                    example of queer gender practices as a means of resistance. The application of "trans," "cis," and other
                    terms has thus far resulted in a dilution of context that loses the "low linguistic prominence" of gender
                    and implicit diversity that is characteristic of the Maori language and worldview{" "}
                    <Cite cite={8} name="Bres" page={31} />. To achieve true decolonization in this case, the Maori community
                    has sought to de-center whiteness and Western privilege in discussions of trans-ness in Aotearoa{" "}
                    <Cite cite={8} name="Bres" page={32} />. In the future, this is likely to result in a return to that
                    implicit diversity, and a reclamation of cultural values from the assumed universal nature of Western
                    queerness.
                </Text>
            </Alert>
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
