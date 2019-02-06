export default function htmlTemplate(reactDom) {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Book</title>
</head>

<body>
    <div id="app">${reactDom}</div>
    <script src="./app.bundle.js"></script>
</body>
</html>
  `;
}
