var  config = require('./dbconfig');
const  sql = require('mssql');

// To query every customers information
async  function  getCustomers() {
    try {
      let  pool = await  sql.connect(config);
      let  results = await  pool.request().query("SELECT * from NDID_T_AS_CUSTOMER_INFO");
      return  results.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

// To query a specific customer information by ID
async  function  getCustomer(id) {
    try {
      let  pool = await  sql.connect(config);
      let  result = await  pool.request()
      .input('input_parameter', sql.VarChar, id)
      .query("SELECT * from NDID_T_AS_CUSTOMER_INFO where request_id = @input_parameter");
      return  result.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

// Insert a customer info
async  function  addCustomer(customer) {
    try {
      let  pool = await  sql.connect(config);
      let  insertEntity = await  pool.request()
      .input('request_id', sql.VarChar, customer.request_id)
      .input('source_node_id', sql.VarChar, customer.source_node_id)
      .input('service_id', sql.VarChar, customer.service_id)
      .input('e_consent_reference', sql.VarChar, customer.e_consent_reference)
      .input('thai_title', sql.VarChar, customer.thai_title)
      .input('thai_first_name', sql.VarChar, customer.thai_first_name)
      .input('thai_middle_name', sql.VarChar, customer.thai_middle_name)
      .input('thai_last_name', sql.VarChar, customer.thai_last_name)
      .input('thai_full_name', sql.VarChar, customer.thai_full_name)
      .input('en_title', sql.VarChar, customer.en_title)
      .input('en_first_name', sql.VarChar, en_first_name.Id)
      .input('en_middle_name', sql.VarChar, customer.en_middle_name)
      .input('en_last_name', sql.VarChar, customer.en_last_name)
      .input('en_full_name', sql.VarChar, customer.en_full_name)
      .input('birth_date', sql.Date, customer.birth_date)
      .input('card_number', sql.VarChar, customer.card_number)
      .input('card_type', sql.VarChar, customer.card_type)
      .input('card_issuing_country', sql.VarChar, customer.card_issuing_country)
      .input('card_issuing_date', sql.Date, customer.card_issuing_date)
      .input('card_expiry_date', sql.Date, card_expiry_date.City)
      .input('id_card_street_address1', sql.VarChar, customer.id_card_street_address1)
      .input('id_card_street_address2', sql.VarChar, customer.id_card_street_address2)
      .input('id_card_address_subdistrict', sql.VarChar, customer.id_card_address_subdistrict)
      .input('id_card_address_district', sql.VarChar, customer.id_card_address_district)
      .input('id_card_address_province', sql.VarChar, customer.id_card_address_province)
      .input('id_card_address_zipcode', sql.VarChar, customer.id_card_address_zipcode)
      .input('id_card_address_country', sql.VarChar, customer.id_card_address_country)
      .input('id_card_address_full', sql.VarChar, customer.id_card_address_full)
      .input('contact_street_address1', sql.VarChar, customer.contact_street_address1)
      .input('contact_street_address2', sql.VarChar, customer.contact_street_address2)
      .input('contact_address_subdistrict', sql.VarChar, customer.contact_address_subdistrict)
      .input('contact_address_district', sql.VarChar, customer.contact_address_district)
      .input('contact_address_province', sql.VarChar, customer.contact_address_province)
      .input('contact_address_zipcode', sql.VarChar, customer.contact_address_zipcode)
      .input('contact_address_country', sql.VarChar, customer.contact_address_country)
      .input('contact_address_full', sql.VarChar, customer.contact_address_full)
      .input('occupation_code', sql.VarChar, customer.occupation_code)
      .input('idp_specific_occupation_desc', sql.VarChar, customer.idp_specific_occupation_desc)
      .input('office_name', sql.VarChar, customer.office_name)
      .input('office_street_address1', sql.VarChar, customer.office_street_address1)
      .input('office_street_address2', sql.VarChar, customer.office_street_address2)
      .input('office_address_subdistrict', sql.VarChar, customer.office_address_subdistrict)
      .input('office_address_district', sql.VarChar, customer.office_address_district)
      .input('office_address_province', sql.VarChar, customer.office_address_province)
      .input('office_address_zipcode', sql.VarChar, customer.office_address_zipcode)
      .input('office_address_country', sql.VarChar, customer.office_address_country)
      .input('office_address_full', sql.VarChar, customer.office_address_full)
      .input('home_tel_no', sql.VarChar, customer.home_tel_no)
      .input('home_tel_no_ext', sql.VarChar, customer.home_tel_no_ext)
      .input('mobile_tel_no', sql.VarChar, customer.mobile_tel_no)
      .input('email_addr', sql.VarChar, customer.email_addr)
      .input('nationality', sql.VarChar, customer.nationality)
      .input('non_iso_nationality_description', sql.VarChar, customer.non_iso_nationality_description)
      .input('income', sql.VarChar, customer.income)
      .input('marital_status', sql.VarChar, customer.marital_status)
      .input('gender', sql.VarChar, customer.gender)
      .input('biometric_data', sql.VarChar, customer.biometric_data)
      .input('biometric_type', sql.VarChar, customer.biometric_type)
      .input('biometric_format', sql.VarChar, customer.biometric_format)
      .input('cust_created_date', sql.Date, customer.cust_created_date)
      .execute('InsertInfo');
      return  insertEntity.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }  

// To query all requests  
async  function  getRequests() {
    try {
      let  pool = await  sql.connect(config);
      let  results = await  pool.request().query("SELECT * from NDID_T_RP_REQUEST");
      return  results.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

// To query a specific request
async  function  getRequest(code) {
    try {
      let  pool = await  sql.connect(config);
      let  result = await  pool.request()
      .input('input_parameter', sql.VarChar, code)
      .query("SELECT * from NDID_T_RP_REQUEST where request_id = @input_parameter");
      return  result.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

// Insert a request informaton
async  function  addRequest(request) {
    try {
      let  pool = await  sql.connect(config);
      let  insertEntity = await  pool.request()
      .input('referenceCode', sql.VarChar, request.referenceCode)
      .input('AppRequestCode', sql.VarChar, request.AppRequestCode)
      .input('request_id', sql.VarChar, request.request_id)
      .input('requestdate', sql.DateTime, request.requestdate)
      .input('requestStatus', sql.VarChar, request.requestStatus)
      .input('responseStatus', sql.VarChar, request.responseStatus)
      .input('closedStatus', sql.VarChar, request.closedStatus)
      .input('TimeoutStatus', sql.VarChar, request.TimeoutStatus)
      .input('isConsentApp', sql.VarChar, request.isConsentApp)
      .input('ConsentAppDate', sql.DateTime, request.ConsentAppDate)
      .input('isConsentNcb', sql.VarChar, request.isConsentNcb)
      .input('ConsentNcbDate', sql.DateTime, request.ConsentNcbDate)
      .input('isConsentNdid', sql.VarChar, request.isConsentNdid)
      .input('ConsentNdidDate', sql.DateTime, request.ConsentNdidDate)
      .execute('InsertRequest');
      return  insertEntity.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  } 

module.exports = {
    getCustomers:  getCustomers,
    getCustomer:  getCustomer,
    addCustomer:  addCustomer,
    
    getRequests:  getRequests,
    getRequest:  getRequest,
    addRequest:  addRequest
  }  