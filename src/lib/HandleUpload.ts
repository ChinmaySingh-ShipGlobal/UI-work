export default function handleUpload(file, onDataExtracted) {
    if (!file) {
      console.error("No file selected.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
  
      const csv = event.target.result as string;
      const lines = csv.split(/\r\n|\n/);
  
      if (lines.length < 2) {
        console.error("Invalid CSV format: Insufficient rows.");
        return;
      }
  
      const headers = parseCSVLine(lines[0]);
      const extractedData = [];
  
      for (let i = 1; i < lines.length; i++) {
        const columns = parseCSVLine(lines[i]);
        if (columns.length !== headers.length) {
          console.warn(`Row ${i + 1} has different number of columns than headers.`);
        }
  
        const rowData = createRowData(headers, columns);
        if (rowData) {
          extractedData.push(rowData);
        }
      }
      onDataExtracted(extractedData);
    };
  
    reader.onerror = (error) => {
      console.error("File reading error:", error);
    };
  
    reader.readAsText(file);
  }
  
  function parseCSVLine(line) {
    const result = [];
    let column = "";
    let insideQuotes = false;
  
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
  
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === "," && !insideQuotes) {
        result.push(column.trim());
        column = "";
      } else {
        column += char;
      }
    }
  
    result.push(column.trim());
    return result;
  }
  
  function createRowData(headers, columns) {
    const rowData = {};
  
    if (columns.length !== headers.length) {
      console.warn(
        `Row has different number of columns than headers: ${columns.length} columns for ${headers.length} headers.`,
      );
      return null;
    }
    if (columns.some((column) => column.trim() === "")) {
      console.warn(`Row has empty columns: ${columns}`);
      return null;
    }
  
    for (let j = 0; j < headers.length; j++) {
      const header = headers[j];
      const value = columns[j].trim();
  
      if (header.includes(".")) {
        setNestedValue(rowData, header, value);
      } else {
        rowData[header] = value;
      }
    }
    return rowData;
  }
  
  function setNestedValue(obj, keyPath, value) {
    const keys = keyPath.split(".");
    let nestedObj = obj;
  
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      nestedObj[key] = nestedObj[key] || {};
      nestedObj = nestedObj[key];
    }
  
    nestedObj[keys[keys.length - 1]] = value;
  }