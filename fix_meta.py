
import re

path = 'layouts/_default/baseof.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find the keywords meta tag, handling multi-line content
# We look for <meta name="keywords" ... >
# We ensure it matches until the closing quote of the content attribute.
pattern = r'<meta name="keywords" content="\{\{ if .Params.tags \}\}\{\{ delimit .Params.tags.*?\n.*?\{\{ end }}"> '

# Actually, the previously observed content:
# <meta name="keywords" content="{{ if .Params.tags }}{{ delimit .Params.tags "
#     , " }}{{ else if .Site.Params.keywords }}{{ delimit .Site.Params.keywords "
#     , " }}{{ else }}프로그래밍, 개발, 기술블로그, Hugo, GitHub{{ end }}">

# Let's use a pattern that matches the specific structure we know is broken
# ensuring we match the newlines.
regex = r'(<meta name="keywords" content="\{\{ if \.Params\.tags \}\}\{\{ delimit \.Params\.tags ")\s+, " (\}\}\{\{ else if \.Site\.Params\.keywords \}\}\{\{ delimit \.Site\.Params\.keywords ")\s+, " (\}\}\{\{ else \}\}프로그래밍, 개발, 기술블로그, Hugo, GitHub\{\{ end }}">)'

replacement = r'\1, " \2, " \3'

# The replacement needs to basically reconstruct the line without newlines/extra spaces.
# Simpler: just replace the entire matched block with the fixed string.

fixed_line = '  <meta name="keywords" content="{{ if .Params.tags }}{{ delimit .Params.tags ", " }}{{ else if .Site.Params.keywords }}{{ delimit .Site.Params.keywords ", " }}{{ else }}프로그래밍, 개발, 기술블로그, Hugo, GitHub{{ end }}">'

# Use DOTALL to match across lines
# Match from <meta name="keywords" to the closing >
match_pattern = r'^\s*<meta name="keywords" content="\{\{ if \.Params\.tags \}\}\{\{ delimit \.Params\.tags ".*?"\s*\}\}\{\{ else \}\}프로그래밍, 개발, 기술블로그, Hugo, GitHub\{\{ end }}">$'
# The above pattern is too complex to get right blindly.

# Let's use the loose pattern:
loose_pattern = r'<meta name="keywords" content="\{\{ if \.Params\.tags \}\}\{\{ delimit \.Params\.tags ".*?\n.*?\{\{ end }}">'

new_content = re.sub(loose_pattern, fixed_line, content, flags=re.DOTALL | re.MULTILINE)

# Also check simply reading lines 11-13 (0-indexed) or 12-14 (1-indexed) if they match somewhat
lines = content.splitlines()
if len(lines) > 13 and 'meta name="keywords"' in lines[11]:
     # lines[11] is line 12.
     print(f"Line 12: {lines[11]}")
     print(f"Line 13: {lines[12]}")
     print(f"Line 14: {lines[13]}")
     
     # Check if broken
     if lines[11].strip().endswith('delimit .Params.tags "'):
         print("Detected broken lines by index. Fixing manually.")
         # Replace lines 11, 12, 13 with single line
         lines[11] = fixed_line.strip() # maintain indentation? fixed_line has 2 spaces indent
         lines[11] = fixed_line # fixed_line starts with 2 spaces
         del lines[13]
         del lines[12]
         new_content_manual = '\n'.join(lines) + '\n' # Ensure trailing newline matches roughly
         
         with open(path, 'w', encoding='utf-8') as f:
             f.write(new_content_manual)
         print("Fixed via manual line manipulation.")
         exit(0)

if content != new_content:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed via Regex.")
else:
    print("Regex fix skipped (modified logic used manual fix hopefully).")
