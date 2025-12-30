import Papa from "papaparse";

export interface ParseResult<T> {
    data: T[];
    errors: Papa.ParseError[];
    meta: Papa.ParseMeta;
}

export const parseCSV = <T>(file: File): Promise<ParseResult<T>> => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results: ParseResult<T>) => {
                resolve(results);
            },
            error: (error: Error) => {
                reject(error);
            },
        });
    });
};
