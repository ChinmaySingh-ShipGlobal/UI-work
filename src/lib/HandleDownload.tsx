export default function handleDownload(fields, data, downloadLinkRef, exportedFileName) {
  const getFieldFromObject = (obj, field) => {
    return field.split(".").reduce((acc, key) => acc?.[key], obj);
  };

  if (!data.length) {
    console.error("No data available to export.");
    return;
  }

  const csvHeader = fields.join(",");

  const csvContent = [
    csvHeader, // Adding header row as the first row
    ...data.map((row) =>
      fields
        .map((field) => {
          const value = getFieldFromObject(row, field);
          return typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : value;
        })
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = window.URL.createObjectURL(blob);

  if (downloadLinkRef.current) {
    downloadLinkRef.current.href = url;
    downloadLinkRef.current.download = `${exportedFileName}.csv`;
    downloadLinkRef.current.click();
  }
}
