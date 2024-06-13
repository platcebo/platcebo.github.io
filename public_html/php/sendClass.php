<?php
class FormSend {

    public function __construct(){
        $this->to = "tridoma@litwin.house"; //tridoma@litwin.house
        $this->subject = 'Заявка с сайта Tridoma'; //Заголовок сообщения
        $this->name = htmlspecialchars($_POST['name']);
        $this->phone = htmlspecialchars($_POST['phone']);
        $this->email = htmlspecialchars($_POST['email']);
        $this->comment = htmlspecialchars($_POST['comment']);
        $this->campaign = htmlspecialchars($_POST['utm_campaign']);
        $this->content = htmlspecialchars($_POST['utm_content']);
        $this->medium = htmlspecialchars($_POST['utm_medium']);
        $this->source = htmlspecialchars($_POST['utm_source']);
        $this->term = htmlspecialchars($_POST['utm_term']);
        $this->token = "6679121727:AAG7l6NL3jbsq1Ijm8KPtHmfYneKG3b4-1M";
        $this->chat_id = "5135585406";
    }
    private function initCurl($url, $method, $data)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);
        return json_decode($result, 1);
    }
    public function mail() {
        
        $message = '                
            Имя: '.$this->name.'
            Телефон: '.$this->phone.'
            Email: '.$this->email.'
            Сообщение: '.$this->comment.'                               
        '; 
        
        $headers = "From: tridoma@litwin.house";
        if (mail($this->to, $this->subject, $message, $headers)) {
            echo 'mail send';
        }else {
            echo 'er mail';
        }
       
    }
    public function addLead() {
        
        $url = "https://project-ru.bitrix24.ru/rest/2647/zxn1198ierzt2kst/crm.lead.add.json";
        
        $queryData = http_build_query(array(
            'fields' => array(
                'TITLE' => 'Заявка с сайта. Три дома',
                'NAME' => $this->name,
                "PHONE" => array(
                    array(
                        "VALUE" => $this->phone,
                        "VALUE_TYPE" => "WORK"
                    )
                ),
                "EMAIL" => array(
                    array(
                        "VALUE" => $this->email,
                    )
                ),
                "SOURCE_ID" => "WEB",
                "STATUS_ID" => "NEW", //UC_W60Y5X
                'COMMENTS' => $this->comment,
                'SOURCE_ID' => 'WEB',
                'UTM_CAMPAIGN' => $this->campaign,
                'UTM_CONTENT' => $this->content,
                'UTM_MEDIUM' => $this->medium,
                'UTM_SOURCE' => $this->source,
                'UTM_TERM' => $this->term,
            ),
            'params' => array(
                "REGISTER_SONET_EVENT" => "Y"
            )
        ));
        
        $ch = $this->initCurl($url, "POST", $queryData);
        $id = $ch["result"];
        $this->updateLead($id);
    }
    public function updateLead($id) {
        $url = "https://project-ru.bitrix24.ru/rest/2647/zxn1198ierzt2kst/crm.lead.update.json";
        $queryData = http_build_query(array(
            'id' =>  $id,  
            'fields' => array(
                "STATUS_ID" => "UC_W60Y5X",
            ),
            'params' => array(
                "REGISTER_SONET_EVENT" => "Y"
            )
        ));
        $ch = $this->initCurl($url, "POST", $queryData);
        
    }
    public function telegram() {
        $url="https://api.telegram.org/bot".$this->token.'/sendMessage';

        $message = '               
<b>Заявка с сайта. Три дома</b>
Имя: '.$this->name.' 
Телефон: '.$this->phone.'
Email: '.$this->email.'
Сообщение: '.$this->comment.'                                
        ';

        $params=[
            'chat_id' => $this->chat_id,
            'text' => $message,
            'parse_mode' => 'html'
        ];
        $ch = $this->initCurl($url, "POST", $params);
        var_dump($ch);
    }
}
?>