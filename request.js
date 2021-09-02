class NDID_T_RP_REQUEST{
    constructor(referenceCode,AppRequestCode,request_id,requestdate,requestStatus,responseStatus,closedStatus,
        TimeoutStatus,isConsentApp,ConsentAppDate,isConsentNcb,ConsentNcbDate,isConsentNdid,ConsentNdidDate){
    this.referenceCode = referenceCode;
    this.AppRequestCode = AppRequestCode;
    this.request_id = request_id;
    this.requestdate = requestdate;
    this.requestStatus = requestStatus;
    this.responseStatus = responseStatus;
    this.closedStatus = closedStatus;
    this.TimeoutStatus = TimeoutStatus;
    this.isConsentApp = isConsentApp;
    this.ConsentAppDate = ConsentAppDate,
    this.isConsentNcb = isConsentNcb;
    this.ConsentNcbDate = ConsentNcbDate;
    this.isConsentNdid = isConsentNdid;
    this.ConsentNdidDate = ConsentNdidDate;

    }
}

module.exports = NDID_T_RP_REQUEST;