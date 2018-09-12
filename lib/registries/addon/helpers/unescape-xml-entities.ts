import Helper from '@ember/component/helper';

export default class UnescapeXMLEntities extends Helper {
    replacements: Array<[RegExp, string]> = [
        [/&amp;/g, '&'],
        [/&lt;/g, '<'],
        [/&gt;/g, '>'],
    ];

    compute(params: [string]/* , hash */) {
        const [text] = params;

        if (!text) {
            return text;
        }

        return this.replacements.reduce(
            (acc, [pattern, replacement]) => acc.replace(pattern, replacement),
            text,
        );
    }
}
