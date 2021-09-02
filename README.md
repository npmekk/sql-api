# sql-api
REST api to insert .json data for SQL Sever

**Change the configuration in config.js according to each system.**

query all customers: GET "localhost:8090/api/cutomer"
query a single customer: GET "localhost:8090/api/customer/(id)"
add customer: POST "localhost:8090/api/customer" with json body
{
    "request_id" : "",
    "source_node_id" : "",
    "service_id" : "",
    "e_consent_reference" : "",
    "thai_title" : "",
    "thai_first_name" : "",
    "thai_middle_name" : "",
    "thai_last_name" : "",
    "thai_full_name" : "",
    "en_title" : "",
    "en_first_name" : "",
    "en_middle_name" : "",
    "en_last_name" : "",
    "en_full_name" : "",
    "birth_date" : "",
    "card_number" : "",
    "card_type" : "",
    "card_issuing_country" : "",
    "card_issuing_date" : "",
    "card_expiry_date" : "",
    "id_card_street_address1" : "",
    "id_card_street_address2" : "",
    "id_card_address_subdistrict" : "",
    "id_card_address_district" : "",
    "id_card_address_province" : "",
    "id_card_address_zipcode" : "",
    "id_card_address_country" : "",
    "id_card_address_full" : "",
    "contact_street_address1" : "",
    "contact_street_address2" : "",
    "contact_address_subdistrict" : "",
    "contact_address_district" : "",
    "contact_address_province" : "",
    "contact_address_zipcode" : "",
    "contact_address_country" : "",
    "contact_address_full" : "",
    "occupation_code" : "",
    "idp_specific_occupation_desc" : "",
    "office_name" : "",
    "office_street_address1" : "",
    "office_street_address2" : "",
    "office_address_subdistrict" : "",
    "office_address_district" : "",
    "office_address_province" : "",
    "office_address_zipcode" : "",
    "office_address_country" : "",
    "office_address_full" : "",
    "home_tel_no" : "",
    "home_tel_no_ext" : "",
    "mobile_tel_no" : "",
    "email_addr" : "",
    "nationality" : "",
    "non_iso_nationality_description" : "",
    "income" : "",
    "marital_status" : "",
    "gender" : "",
    "biometric_data" : "",
    "biometric_type" : "",
    "biometric_format" : "",
    "cust_created_date" : ""
}

query all requests: GET "localhost:8090/api/request"
query a single request: GET "localhost:8090/api/request/(id)"
add request: POST "localost:8090/api/request" with json body
{
    "referenceCode" : "",
    "AppRequestCode" : "",
    "request_id" : "",
    "requestdate" : "",
    "requestStatus" : "",
    "responseStatus" : "",
    "closedStatus" : "",
    "TimeoutStatus" : "",
    "isConsentApp" : "",
    "ConsentAppDate" : "",
    "isConsentNcb" : "",
    "ConsentNcbDate" : "",
    "isConsentNdid" : "",
    "ConsentNdidDate" : ""
}
