<?
    require __DIR__.'/sendClass.php';
    $form = new FormSend();
    $form->mail();
    $form->addLead();
    $form->telegram();
?>