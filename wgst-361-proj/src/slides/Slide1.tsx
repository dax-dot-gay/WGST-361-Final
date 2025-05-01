import { Title, Accordion, AccordionItem, AccordionControl, AccordionPanel, Stack, Group, Divider, Text } from "@mantine/core";
import { MdFlag } from "react-icons/md";
import { TbGenderTransgender, TbBrain } from "react-icons/tb";
import { Cite, CitationSummary, CitedImage } from "../components/Citations";
import { Slide } from "./Slide";

export function Slide1() {
    return (
        <Slide name="slide-1" next="slide-2" title="First, some background.">
            <Title order={3}>What -- in broad terms -- is Queering Gender?</Title>
            <Text>
                Queering gender is a collection of ideals and frameworks through which one might better understand the
                constructed features of gender & sexuality. This may include personal identity, one's presentation, or even
                simple behavioral or physical traits, provided that these facets are incongruous with the expected "norms" that
                the dominant culture assumes. Based on that, and the current dominance of a broadly Western culture, current
                acts and investigations of queering gender generally seek to oppose the following assumptions:
            </Text>

            <Accordion variant="separated" defaultValue={["a1"]} multiple>
                <AccordionItem value="a1">
                    <AccordionControl icon={<TbGenderTransgender size={24} />}>
                        Assumption: Sex is a biological binary.
                    </AccordionControl>
                    <AccordionPanel>
                        <Stack gap="sm">
                            <Text>
                                As a result of extended investigation into the topic, experts in human sexual development &
                                sexual multi-morphism agree that the so-called "truth" of the XX & XY chromosomes being the sole
                                determination of sex characteristics is wildly oversimplified and wholly invalid{" "}
                                <Cite cite={1} name="Fausto-Sterling" page={16} />. On the contrary, sex differentiation is
                                affected by several independent factors, and even at the point where sexual development has been
                                determined it frequently does not fit the restrictive binary assumed by Western culture. These
                                intersex characteristics can take a wide variety of forms, many of which are themselves wide
                                categories for any number of varied characteristics{" "}
                                <Cite cite={1} name="Fausto-Sterling" page={25} />.
                            </Text>
                            <Group gap="sm" wrap="nowrap" align="start">
                                <CitationSummary
                                    cite={1}
                                    title="Of Molecules and Sex"
                                    author="Anne Fausto-Sterling"
                                    style={{ flexGrow: 1 }}
                                >
                                    <Text>
                                        In <em>Of Molecules and Sex</em>, Fausto-Sterling seeks to dispel the notion that binary
                                        sex is a generalizable system across the field of biology, especially as it pertains to
                                        the study of human sexual development. She sets the stage by discussing the so-called
                                        "Mother Goose version" of the mating behaviors of bluegill sunfish, and highlights its
                                        immense inaccuracies when compared to the far more complex behaviors and associated
                                        sexual characteristics that actually make up the species' mating process{" "}
                                        <Cite cite={1} name="Fausto-Sterling" page={12} />. From this basis, she describes
                                        similar discrepancies between commonly held beliefs regarding human sexual development
                                        and the actual complexities involved, casting heavy doubt on the assumed dimorphism upon
                                        which Western social norms are constructed. Through an overall scientifically objective
                                        lens, Fausto-Sterling quite effectively communicates the true complexity of human sexual
                                        development, clearly outlining its stages from chromosomal sex, through fetal gonadal &
                                        hormonal sex, and finally to genital sex.
                                    </Text>
                                </CitationSummary>
                                <CitedImage
                                    cite={1}
                                    author="Fausto-Sterling"
                                    page={18}
                                    src={"/assets/img/gonadal_development.png"}
                                    style={{ flexGrow: 0 }}
                                    miw="512px"
                                    imgProps={{
                                        h: "auto",
                                        w: "50%",
                                        maw: "512px",
                                        miw: "512px",
                                    }}
                                />
                            </Group>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="a2">
                    <AccordionControl icon={<MdFlag size={24} />}>
                        Assumption: The Western conception of gender is the global default.
                    </AccordionControl>
                    <AccordionPanel>
                        <Stack gap="sm">
                            <Text>
                                On the contrary, there are numerous historical & modern examples of a non-Western conception of
                                gender and sexuality. The modern Western conception of gender and sexuality is, in fact, heavily
                                rooted in values more closely associated with Catholicism and similar faiths, and rarely
                                reflects the myriad concepts adhered to by other cultures. In its strict adherence to a binary
                                system defined primarily by birth sex, the Western concept of gender and sexuality fails
                                entirely to account for "around 10%" of its population that does not meet the requirements of
                                cisheteronormativity <Cite cite={2} name="Schleicher" page={422} />.
                            </Text>
                            <CitationSummary
                                cite={2}
                                title="Constructions of Sex and Gender: Attending to Androgynes and ‘Tumtumim’ through Jewish Scriptural Use."
                                author="Marianne Schleicher"
                            >
                                <Stack gap="sm">
                                    <Text>
                                        In this piece, Schliecher describes in detail the specific legal categorizations used to
                                        denote sex & gender in Jewish scripture. While she describes the baseline assumptions at
                                        play at that time as largely binary, she clearly indicates the space made for those who
                                        did not conform to the major categories of male/female. Her primary focus is on the
                                        categorizations themselves, which she enumerates in their classification and their
                                        effects on those who fell within them.
                                    </Text>
                                    <Divider variant="dashed" />
                                    <Text fw="bold">What we can learn from this:</Text>
                                    <Text>
                                        In the context of Jewish scripture, sex was used as the basis for many facets of the
                                        legal system, and granted different privileges to those of each sex. This deep reliance
                                        on sex as a means of categorization meant that being certain of someone’s sex was
                                        paramount to their legal status, and thus clear delineations on what each category meant
                                        were thought to be critically necessary.
                                    </Text>
                                </Stack>
                            </CitationSummary>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="a3">
                    <AccordionControl icon={<TbBrain size={24} />}>
                        Assumption: Birth sex is equivalent to gender.
                    </AccordionControl>
                    <AccordionPanel>
                        <Stack gap="sm">
                            <Text>
                                While this particular assumption is less accepted nowadays as support for transgender
                                individuals rises, it nevertheless plays a large part in the formation of many peoples' biases.
                                Efforts to deconstruct this notion were brought into the public eye through early studies of
                                "psychological sex", in an attempts to explain the experiences of transgender individuals during
                                the early 20th century <Cite cite={4} name="Meyerowitz" page={114} />. Further progress was made
                                in this disentanglement during the 2nd wave feminist movement, which positioned femininity as a
                                matter of identity as opposed to one of biology <Cite cite={3} name="Hines" page={703} />. While
                                these efforts contributed greatly to the deconstruction of the assumed equivalence in question,
                                both ultimately failed to take the theory to its logical extent -- that as unrelated
                                characteristics, sex and gender need not be interrelated at all, or even have any real effect on
                                one's cultural status.
                            </Text>
                            <CitationSummary cite={3} title="Sex Wars and (Trans) Gender Panics" author="Sally Hines">
                                <Text>
                                    In the excerpt from her article, Hines contextualizes the development of a 20th-century
                                    concept of gender with the simultaneous development of second-wave feminism. She primarily
                                    focuses on the feminist movement’s fixation on sex as a distinct and biologically rigid
                                    binary, even while many among them simultaneously explored gender as a “matter of culture”
                                    or simply a “social classification” <Cite cite={3} name="Hines" page={703} />. This
                                    contradiction in terms created a significant paradox, as it indicated that the feminist
                                    movement wanted to destroy the cultural meaning of sex differences while still maintaining
                                    the understanding of the differences themselves.
                                </Text>
                            </CitationSummary>
                            <CitationSummary
                                cite={4}
                                title="How Sex Changed - From Sex to Gender (Excerpt)"
                                author="Joanne Meyerowitz"
                            >
                                <Text>
                                    In this excerpt, Meyerowitz describes the development of a scientific basis for sex/gender
                                    disentanglement, focusing on the period during & following the second World War most
                                    prominently. She focuses primarily on the concept of psychological sex – an early
                                    understanding of gender’s non-reliance on physiological sex – and how that concept shaped
                                    the discussion across many fields of medical science. Interestingly, this concept was
                                    generally accepted by both proponents of gender-affirming care and those who instead
                                    intended to change the mind to match the body; unlike today’s denial of gender’s existence,
                                    scientists at the time seemed to differ most greatly in end goals rather than foundational
                                    beliefs.
                                </Text>
                            </CitationSummary>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Slide>
    );
}
