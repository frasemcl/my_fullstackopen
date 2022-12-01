# Answers for part0

Resources for making diagrams

- [websequencediagrams](https://www.websequencediagrams.com/)
- [Mermaid](https://github.com/mermaid-js/mermaid#sequence-diagram-docs---live-editor)

### 0.4: New note

Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes when writing something into the text field and clicking the submit button.

```mermaid
sequenceDiagram
    Note over browser: User submits a note
    browser->>server: HTTP POST https://.../new_note {note: "hello"}
    server-->>browser: HTTP status code 302 {location: /exampleapp/notes}
    browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: HTML-code
    browser->>server: HTTP GET .../main.css
    server-->>browser: main.css
    browser->>server: HTTP GET .../main.js
    server-->>browser: main.js
    Note over browser: browser executes js-code that requests JSON
    browser->>server: HTTP GET .../data.json
    server-->>browser: [{content: "comment1", date: "yy-mm-dd"}, ...]
    Note over browser: browser executes event handler that renders notes
```

### 0.5: Single page app

Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
    browser->>server: HTTP GET  https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML-code
    browser->>server: HTTP GET .../main.css
    server-->>browser: main.css
    browser->>server: HTTP GET .../main.js
    server-->>browser: main.js
    Note over browser: browser executes js-code that requests JSON
    browser->>server: HTTP GET .../data.json
    server-->>browser: [{content: "comment1", date: "yy-mm-dd"}, ...]
    Note over browser: browser executes event handler that renders notes
```

### 0.6: New note

Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

```mermaid
sequenceDiagram
    Note over browser: User submits a note on spa
    Note over browser: Note render on page via JS, which then sends the note to the server
    browser->>server: HTTP POST https://.../new_note_spa {note: "hello", date: "today"}
    server-->>browser: HTTP status code 201 {message: "note created"}
```
