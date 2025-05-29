# Field Concatenation Artifact - Multidimensional Table Field Shortcut Plugin

A powerful feishu multidimensional table field shortcut plugin designed for efficient data concatenation and formatting. It supports concatenating the content of multiple fields according to a custom format and automatically generates standard Markdown formatted output.

## ✨ Core Features

### 🎯 Multi-Field Selection and Concatenation
- Supports simultaneous selection of multiple fields of different types (text, number, single-select, multi-select, URL, date, etc.)
- Intelligently handles various data types, automatically converting them to text format
- Supports content extraction from rich text fields

### 📝 Markdown Formatting Output
- **Global Prefix/Suffix**: Adds a Markdown heading format prefix and suffix to the entire concatenated result
- **Field Prefix**: Adds a Markdown heading prefix with quotation marks to each field's content
- **Heading Level**: Supports selection of six heading levels (H1-H6)
- Automatically handles line breaks and formatting to ensure standardized Markdown output

### 🔧 Flexible Connection Methods
- **Inter-Field Connector**: Supports newline, comma, space, semicolon, pipe symbol, or custom connectors
- **Insert Text Between Fields**: Allows insertion of additional custom text on top of the connector
- **Personalized Prefix**: Set individual prefix text for each field, separated by a pipe symbol

### ⚡ High-Performance Design
- Supports processing large amounts of data (50,000-100,000 characters)
- Intelligently filters null values to avoid generating redundant content
- Built-in performance monitoring and warning mechanisms

## 🚀 Use Cases

### 📊 Data Report Generation
Quickly organize table data into formatted report documents:
```markdown
# Employee Information Summary

## "Name"
Zhang San
## "Department"
Technology Department
## "Onboarding Date"
2023-01-15

# Report Generation Complete
```

### 📋 Content Organization
Organize scattered field information into structured documents:
- Product information summary
- Customer data organization
- Project progress reports
- Meeting minutes generation

### 📝 Template Generation
Create standardized document templates:
- Resume formatting
- Contract clause organization
- Instruction manual generation
- Email content templates

## 🛠️ Configuration Options

| Configuration Item | Description | Example |
|---|---|---|
| Field Selection | Select multiple fields to be concatenated | Name, Age, Department |
| Global Prefix Heading Level | H1-H6 heading level | H1 (#) |
| Global Prefix/Suffix | Beginning and end of the overall content | "Employee Information" / "Record Complete" |
| Field Prefix Heading Level | Heading level for field titles | H2 (##) |
| Field Prefix | Identifying text for each field | "Name\|Age\|Department" |
| Inter-Field Connector | Separation method between fields | Newline, Comma, Custom |
| Insert Text Between Fields | Additional text beyond the connector | " - ", ", " |

## 📈 Performance Characteristics

- ✅ Supports large data volume processing (50,000-100,000 characters)
- ✅ Smart memory management to avoid performance issues
- ✅ Real-time processing, instant result generation
- ✅ Error handling mechanism to ensure stable operation
- ✅ Detailed debugging logs for easy troubleshooting

## 🎨 Output Example

**Input Configuration:**
- Fields: Name (Zhang San), Age (28), Department (R&D Department)
- Global Prefix: "Team Member Information" (H1)
- Field Prefix: "Name|Age|Department" (H2)
- Connector: Newline

**Output Result:**
```markdown
# Team Member Information

## "Name"
Zhang San
## "Age"
28
## "Department"
R&D Department
```

## 💡 Usage Tips

1.  **Batch Processing**: Configure once, automatically process data for all rows in the table
2.  **Format Unification**: Ensure consistent formatting of generated documents for easy subsequent use
3.  **Template Reuse**: Save frequently used configurations to quickly apply to different datasets
4.  **Performance Optimization**: For extremely large data volumes, it is recommended to process in batches

---

This plugin makes data organization simple and efficient. Whether it's summarizing data in daily work or generating formal documents, it can handle it with ease. Through Markdown format output, the generated content can be directly used in various platforms and tools that support Markdown.