import os
import re

FAVICON_TAG = '    <link rel="icon" type="image/png" href="image/olegario_formal.png">\n'

for filename in os.listdir('.'):
    if filename.endswith('.html'):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()

        if 'rel="icon"' in content:
            print(f"Skipped (already has favicon): {filename}")
            continue

        # Insert right after the <title>...</title> line
        new_content, count = re.subn(
            r'(</title>\s*\n)',
            r'\1' + FAVICON_TAG,
            content,
            count=1
        )

        if count:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filename}")
        else:
            print(f"No </title> found, skipped: {filename}")