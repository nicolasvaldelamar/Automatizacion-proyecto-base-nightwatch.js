const helper = require('./helpers');
const parser = new (require('simple-excel-to-json-u').XlsParser)();
const path_data = './data/';
const path_features = './test/features/**/**/*.feature';
const replace = require('replace-in-file');


const files_csv = helper.leerDirectorioSinArchivosOcultos(path_data);

files_csv.forEach(n_csv => {
    const excel_file = path_data + n_csv;
    const excel = parser.parseXls2Json(excel_file, { isNested: true });
    const sheet = excel[0];
    let content_for_feature = "";
    sheet.forEach(function (val, index) {
        let json_keys = Object.keys(val);
        let json_values = Object.values(val);
        if (index == 0) {
            content_for_feature += `|${json_keys.join('|')}|\n`;
        }
        if (json_values[0] != '') {
            content_for_feature += `|${json_values.join('|')}|\n`;
        }
    });

    const start = `# FILE-DATA:${n_csv}`;
    const end = `# DATA-END`;
    const re = new RegExp(`${start}([\\s\\S]*?)${end}`, "g");

    const results = replace.sync({
        files: path_features,
        from: re,
        to: `${start}\n${content_for_feature}\n${end}`,
    });
    console.log(results);
});



