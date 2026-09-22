#!/usr/bin/env bash
# Assemble les pages HTML à partir des partials (en-tête, pied de page) et des corps de page.
# Usage : tools/assemble.sh   (depuis la racine du dépôt)
set -euo pipefail
cd "$(dirname "$0")/.."
for body in tools/pages/*.html; do
  name=$(basename "$body")
  meta="tools/pages/${name%.html}.meta"
  # shellcheck disable=SC1090
  source "$meta"   # définit TITLE, DESC, ACTIVE, EXTRA_HEAD (optionnel), CANONICAL
  {
    cat <<HEAD
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${TITLE}</title>
<meta name="description" content="${DESC}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%234b2a5c'/%3E%3Ctext x='16' y='21' text-anchor='middle' font-family='Georgia' font-size='16' fill='white'%3ES%3C/text%3E%3C/svg%3E">
${EXTRA_HEAD:-}
</head>
<body>
HEAD
    sed -e "s/__ACTIVE_${ACTIVE}__/aria-current=\"page\"/" -e 's/ __ACTIVE_[a-z]*__//g' tools/partials/header.html
    cat "$body"
    cat tools/partials/footer.html
    echo "</body>"
    echo "</html>"
  } > "$name"
  echo "→ $name"
done
