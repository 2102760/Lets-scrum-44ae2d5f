<?php

function postToSlack($message)
{
    $data = array("text" => $message, "username" => "Webhooks");
    $curl = curl_init("https://hooks.slack.com/services/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");
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    return curl_exec($curl);
}

var_dump(postToSlack('ja'));
?>