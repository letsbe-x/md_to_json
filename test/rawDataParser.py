import requests


main_url = 'https://raw.githubusercontent.com/Integerous/goQuality-dev-contents/master/README.md'
# HTTP GET Request
req = requests.get(main_url)
# HTML 소스 가져오기
html = req.text

print(html)