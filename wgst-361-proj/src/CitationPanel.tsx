import { Stack } from "@mantine/core";
import { Citation } from "./components/Citations";

export function CitationPanel() {
    return (
        <Stack gap="sm" p="sm" className="citation-list">
            <Citation citeKey={1} title="Of Molecules and Sex" url="/assets/sources/of_molecules_and_sex.pdf">
                Fausto-Sterling, Anne. “Of Molecules and Sex,” in Sex/Gender: Biology in a Social World. Abingdon, Oxon: Taylor
                & Francis Group, 2012
            </Citation>
            <Citation
                citeKey={2}
                title="Constructions of Sex and Gender: Attending to Androgynes and ‘Tumtumim’ through Jewish Scriptural Use."
                url="/assets/sources/jewish_sex_and_gender.pdf"
            >
                Schleicher, Marianne. “Constructions of Sex and Gender: Attending to Androgynes and ‘Tumtumim’ through Jewish
                Scriptural Use.” Literature and Theology 25, No. 4, (December 2011), pp. 422-435.
            </Citation>
            <Citation citeKey={3} title="How Sex Changed - From Sex to Gender" url="/assets/sources/from_sex_to_gender.pdf">
                Meyerowitz, Joanne. How Sex Changed: A History of Transsexuality in the United States. 1;1st Harvard University
                Press pbk.; ed. Cambridge, MA: Harvard University Press, 2004;2002;2009.
            </Citation>
        </Stack>
    );
}
