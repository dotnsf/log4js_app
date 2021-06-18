# Log4js App

## Overview

Sample application which use Log4js.


## How to connect IBM Cloud Log Analysis with LogDNA

- Set region of IBM Cloud

  - Login to IBM Cloud dashboard

  - Create/Select **Log Analysis with LogDNA** service

  - Select **Configure platform services log** in upper-right button

  - Select valid region and instance, and click "save".

  - Select **View LogDNA** button, and confirm live log.

- Set CUPS(Custom user provided service) to bind application and service

  - Select **View LogDNA** button(as above), and click **Install Instructions** in down-left question icon.

  - Select **Via Syslog** - **syslog** in left menu, and select **Provision a Syslog port** button.

  - Copy Syslog endpoint URL with port(SYSLOG_ENDPOINT_URL:PORT_NUMBER).

  - `$ cf login`

  - `$ cf cups SVC_NAME -l syslog://SYSLOG_ENDPOINT_URL:PORT_NUMBER`

    - SVC_NAME : Free name of service

  - `$ cf bind-service CF_APP_NAME SVC_NAME`

    - CF_APP_NAME : Name of cf application

  - `$ cf push CF_APP_NAME` or `$ cf restage CF_APP_NAME`

  - Select **View LogDNA** button, and confirm live log from application.


## References

https://www.npmjs.com/package/log4js

https://dev.classmethod.jp/articles/node-js-log4js/

https://qiita.com/Motonaga/items/6b1864deaadbb431b3cb


## Copyright

2021 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
