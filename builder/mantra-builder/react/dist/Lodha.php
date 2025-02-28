<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"]; // Retrieve message field

    // Process the data (you can perform any necessary operations here)

    // Email details
    // $to = "leads@gurugram-property.com";
    $to = "ashutosh.tiwari@propertystation.in"; 
    $subject = "Mantra  Joypin, Kharadi | Pune Google lead";
    $messageBody = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message"; // Include message in email body

    // Send email
    $headers = "From: leads@gurugram-property.com"; // Replace with the sender's email address
    if (mail($to, $subject, $messageBody, $headers)) {
        
        // Api Code:  start

        // Api Url
        $api_url = 'https://cms.propertystation.in/api/v2/ppc/lead';


        API Key
        $api_userPublicKey = 'CrT1pW961MbG6rVKRlW2LUiDn5YTDgab07DnbXRn5lsm5L91TU6X74/UQI1wTmLU';
        $api_userSecretKey = 'whCEyv8Iv1CDhwqlAjzXnKBSZSROfu7i1WlYenaIeSJIIH6ZJ1DvcJI='; 

        // headers
        $apiheaders = array(
            "public-key: $api_userPublicKey",
            "secret-key: $api_userSecretKey",
            "Content-Type: application/json"
        );

        // form Data
        $postParameter = array(
        'name'=> $name,
        'email'=> $email,
        'mobile_no'=> $phone,
        'message'=> $message,
        'source_id'=>11, // Source Id
        'sub_source_id'=>64,  //Sub Source Id
        'builder_id'=>'124', // Builder Id
        'project_id'=>'563', // Project Id
        );

        // call api
        $encodedData = json_encode($postParameter);
        $curl = curl_init($api_url);
        $data_string = urlencode(json_encode($postParameter));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt( $curl, CURLOPT_HTTPHEADER, $apiheaders);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $encodedData);
        $result = curl_exec($curl);
        curl_close($curl);


        // Api Code:  End
      header("Location: https://pune-properties.co/thanks");
        exit();
    } else
    {
        echo "<h2>Error</h2>";
        echo "<p>Sorry, there was an error submitting your form. Please try again later.</p>";
    }
} else {
    // Redirect if accessed directly without form submission
    header("Location:  https://pune-properties.co/thanks");
    exit();
}
?>