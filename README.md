# Setup

## Git

Clone the module under your protected/modules folder:
```
cd /var/www/openeyes/protected/modules
git clone git@github.com:sabi1981/OpenEyes-Developer-module.git developer

Fodler structutre should looke like 
- modules
    - developer
        - config
        - controllers
        - modules
            - logViewer
        - views
        DeveloperModule.php
        README.md
```

Edit your **local**,  main OpenEyes git "exclude" file to ignore the whole developer module
without modify the main .gitignore file

`/var/www/openeyes(develop)$ vim .git/info/exclude`

add the following line:

`/protected/modules/developer`

end result should look like:
```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~

/protected/modules/developer
```
## Local config

Edit yopur local config to add the developer module

`/var/www/openeyes/config/local/common.php`

edit the 'modules' part

```
'modules' => array(
    'eyedraw',
     ..
     ..
    'OphTrOperationchecklists'
    'developer'
),
```
application.log on screen
![image](https://user-images.githubusercontent.com/7114290/145087048-019bbf07-4088-44e1-92e3-c6d55d3bf978.png)
