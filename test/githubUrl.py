import requests
from bs4 import BeautifulSoup

main_url = 'https://github.com/Integerous/goQuality-dev-contents/blob/master/README.md'
# HTTP GET Request
req = requests.get(main_url)
# HTML 소스 가져오기
html = req.text
soup = BeautifulSoup(html, 'html.parser')

#article만 가져와볼까
article = soup.find_all(
  'div', class_='readme'
)

list = soup.find_all(
  'li'
)
for line in list:
  print(line)
  '''
  data = comment.get_text(strip=True)
  if not data:
    continue
  list.append(data)
  '''