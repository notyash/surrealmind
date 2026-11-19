DEFINE TABLE OVERWRITE promotionRequest SCHEMAFULL
        PERMISSIONS FULL;

    DEFINE FIELD OVERWRITE fromScope ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE toScope ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE originalDraft ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE reviewedFact ON promotionRequest TYPE string;
    DEFINE FIELD OVERWRITE author ON promotionRequest TYPE string; 
    DEFINE FIELD OVERWRITE status ON promotionRequest 
        TYPE "pending" | "approved" | "rejected" 
        VALUE string::lowercase($value)
        DEFAULT "pending";
    DEFINE FIELD OVERWRITE requestedAt ON promotionRequest
        TYPE datetime 
        DEFAULT time::now();

    DEFINE FIELD OVERWRITE reviewedBy ON promotionRequest TYPE option<string>; 
    DEFINE FIELD OVERWRITE reviewedAt ON promotionRequest TYPE option<datetime>;
    DEFINE FIELD OVERWRITE rejectionReason ON promotionRequest TYPE option<string>;
