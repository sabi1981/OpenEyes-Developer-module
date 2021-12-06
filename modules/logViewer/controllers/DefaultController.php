<?php

class DefaultController extends BaseAdminController
{
    public $layout = '//layouts/admin';

    public $script = <<<SCRIPT
        ready(() => {
            const ul = document.querySelector('#js-nav-shortcuts-subnav ul');
            if (ul) { 
                const li = OpenEyes.UI.DOM.createElement('li');
                li.innerHTML = `<a href='/developer/logViewer/default'>Dev Log Viewer</a>`;
                ul.appendChild(li);
            }
        });
SCRIPT;


    protected function beforeAction($action) {
        Yii::app()->getClientScript()->registerScript('scr_', $this->script, CClientScript::POS_HEAD);

        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        $log = file_get_contents(Yii::getPathOfAlias('application.runtime.application') . ".log");
        $this->render('index', ['log' => $log]);
    }
}
