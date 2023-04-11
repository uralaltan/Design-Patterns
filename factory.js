class DocumentFactory {
    createDocument(type) {
        switch(type) {
            case 'PDF':
                return new PDFDocument();
            case 'Word':
                return new WordDocument();
            case 'Spreadsheet':
                return new SpreadsheetDocument();
            default:
                throw new Error(`Invalid document type: ${type}`);
        }
    }
}

class PDFDocument {
    constructor() {}
}

class WordDocument {
    constructor() {}
}

class SpreadsheetDocument {
    constructor() {}
}

const factory = new DocumentFactory();
const pdfDoc = factory.createDocument('PDF');
const wordDoc = factory.createDocument('Word');
const spreadsheetDoc = factory.createDocument('Spreadsheet');
