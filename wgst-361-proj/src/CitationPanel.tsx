import { Alert, ScrollAreaAutosize, SimpleGrid, Text } from "@mantine/core";
import { Citation } from "./components/Citations";
import { TbNotebook } from "react-icons/tb";

export function CitationPanel() {
    return (
        <ScrollAreaAutosize mah="calc(100vh - 183px)">
            <SimpleGrid verticalSpacing="sm" spacing="sm" p="sm" className="citation-list" cols={{ base: 1, xl: 2 }}>
                <Citation citeKey={1} title="Of Molecules and Sex" url="/assets/sources/of_molecules_and_sex.pdf">
                    <Text>
                        Fausto-Sterling, Anne. “Of Molecules and Sex,” in Sex/Gender: Biology in a Social World. Abingdon, Oxon:
                        Taylor & Francis Group, 2012
                    </Text>

                    <Alert color="gray" icon={<TbNotebook size={20} />} title="Source Reflection">
                        I felt that this reading served as an extremely effective starting point for discussing Queering Gender,
                        especially within today's political context. I primarily selected it to serve that exact purpose; to
                        dispel initial misconceptions in order to set up for further discussion. Though it didn't go into the
                        gender aspect at all, it still managed to make a quite salient point that provides additional context
                        for future readings.
                    </Alert>
                </Citation>
                <Citation
                    citeKey={2}
                    title="Constructions of Sex and Gender: Attending to Androgynes and ‘Tumtumim’ through Jewish Scriptural Use"
                    url="/assets/sources/jewish_sex_and_gender.pdf"
                >
                    <Text>
                        Schleicher, Marianne. “Constructions of Sex and Gender: Attending to Androgynes and ‘Tumtumim’ through
                        Jewish Scriptural Use.” Literature and Theology 25, No. 4, (December 2011), pp. 422-435.
                    </Text>
                    <Alert color="gray" icon={<TbNotebook size={20} />} title="Source Reflection">
                        I selected this article as an example of cross-cultural understandings of non-binary sexual & gender
                        characteristics, as I felt that it covered the topic at hand quite effectively out of the available
                        options. While it didn't contribute a great deal in isolation, it paired well with the rest of the
                        readings we covered. For the purposes of this assignment, it was -- in my opinion -- the most
                        approachable example to combat the assumptions I was presenting.
                    </Alert>
                </Citation>
                <Citation
                    citeKey={3}
                    title="How Sex Changed - From Sex to Gender (Excerpt)"
                    url="/assets/sources/from_sex_to_gender.pdf"
                >
                    <Text>
                        Meyerowitz, Joanne. How Sex Changed: A History of Transsexuality in the United States. 1;1st Harvard
                        University Press pbk.; ed. Cambridge, MA: Harvard University Press, 2004;2002;2009.
                    </Text>
                    <Alert color="gray" icon={<TbNotebook size={20} />} title="Source Reflection">
                        This article was selected to complement Fausto-Sterling's primarily biological description of sexual
                        characteristics. Specifically, it served to better bring into context the sexual characteristics being
                        described in relation to wider concepts of gender identity and presentation. Personally, its focus on
                        specific, personal examples helped bring the reading into its surrounding context more clearly, as queer
                        histories are often harder to parse without understanding the <em>people</em> that were affected.
                    </Alert>
                </Citation>
                <Citation
                    citeKey={4}
                    title="Radical Sovereignty, Rhetorical Borders, and the Everyday Decolonial Praxis of Indigenous Peoplehood and Two-Spirit Reclamation"
                    url="/assets/sources/radical_sovereignty.pdf"
                >
                    <Text>
                        Ellasante, Ian Khara. "Radical Sovereignty, Rhetorical Borders, and the Everyday Decolonial Praxis of
                        Indigenous Peoplehood and Two-Spirit Reclamation." Ethnic and Racial Studies 44 no. 9 (2021): 1507-1526.
                    </Text>
                    <Alert color="gray" icon={<TbNotebook size={20} />} title="Source Reflection">
                        Ellasante's piece stood out starkly, especially given my personal context as an activist against the
                        overreaches of the American hegemony. It was an extremely good way to define useful terms of
                        decolonization, and served a large part in delivering my eventual point. It contributed similarly to my
                        understanding of the class -- I hadn't truly considered language as a form of colonization until I read
                        this piece.
                    </Alert>
                </Citation>
                <Citation
                    citeKey={5}
                    title="Stolen From Our Bodies: First Nations Two-Spirits/Queers and the Journey to a Sovereign Erotic"
                    url="/assets/sources/stolen_bodies.pdf"
                >
                    <Text>
                        Driskill, Qwo-li. “Stolen From Our Bodies: First Nations Two-Spirits/Queers and the Journey to a
                        Sovereign Erotic.” Studies in American Indian Literatures 16, no. 2 (2004): 50–64.
                    </Text>
                    <Alert color="gray" icon={<TbNotebook size={20} />} title="Source Reflection">
                        Despite the surrounding controversy, this piece still contained some useful information. Additionally,
                        the controversy proved a point in and of itself, which allowed me to use this source for multiple
                        disparate purposes. The controversy was also what made it stand out during class -- it hadn't been
                        pointed out beforehand as controversial, so discovering that as a class was a worthwhile exercise.
                    </Alert>
                </Citation>
                <Citation
                    citeKey={6}
                    title="Decolonising Trans‐Affirming Language in Aotearoa"
                    url="/assets/sources/decolonising_trans.pdf"
                >
                    <Text>
                        Bres, Julia. "Decolonising Trans‐Affirming Language in Aotearoa." Journal of Sociolinguistics 28, no. 3
                        (2024): 30-34.
                    </Text>
                    <Alert color="gray" icon={<TbNotebook size={20} />} title="Source Reflection">
                        This piece served as a good end point for this assignment; it provided solid means of resisting
                        rhetorical imperialism, and focused very specifically on an area which I care deeply about. In terms of
                        its presence in class, it was equally impactful, and provided additional useful context to Ellasante's
                        piece from earlier.
                    </Alert>
                </Citation>
            </SimpleGrid>
        </ScrollAreaAutosize>
    );
}
