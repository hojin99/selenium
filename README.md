# selenium

## WSL2 + CentOS 7
libxcb.x86_64 없다는 메세지 나와서 설치  
yum install libxcb.x86_64  

## WSL2 + Ubuntu

### chromedriver 다운로드 후 PATH 설정을 해서 어디서나 chromedriver 실행이 됨에도 node 실행 시 찾을 수 없다고 나옴  
(node:12593) UnhandledPromiseRejectionWarning: Error: The ChromeDriver could not be found on the current PATH. Please download the latest version of the ChromeDriver from http://chromedriver.storage.googleapis.com/index.html and ensure it can be found on your PATH  

### npm install로 chromedriver를 설치 후 node module import 후 chromedriver.path로 경로를 지정해 주었더니 아래와 같이 에러가 바뀜  
TypeError: not a chrome.ServiceBuilder object  

### 아래와 같이 에러가 안 나도록 Type을 맞춰서 넘기니 아래와 같이 에러가 바뀜
const service = new chrome.ServiceBuilder(chromedriver.path).build();
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();
=>
const service = new chrome.ServiceBuilder(chromedriver.path);
const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

UnhandledPromiseRejectionWarning: WebDriverError: unknown error: cannot find Chrome binary

### 옵션을 줘서 실행 했으나 crash
    options.setChromeBinaryPath("/mnt/d/work/selenium/driver/linux/chromedriver");
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

(node:15241) UnhandledPromiseRejectionWarning: WebDriverError: unknown error: Chrome failed to start: exited abnormally.
  (unknown error: DevToolsActivePort file doesn't exist)
  (The process started from chrome location /mnt/d/work/selenium/driver/linux/chromedriver is no longer running, so ChromeDriver is assuming that Chrome has crashed.)