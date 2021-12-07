<?php

class DefaultController extends BaseAdminController
{
    public $layout = '//layouts/admin';

    public function actionIndex()
    {
        $log = file_get_contents(Yii::getPathOfAlias('application.runtime.application') . ".log");
        $this->render('index', ['log' => $log]);
    }
}
